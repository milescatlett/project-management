import React, { useCallback, useEffect, useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Views } from 'react-big-calendar';

function RegCalendar( {calAppKey} ) {
  const [account, setAccount] = useState("")
  const [newEv, setNewEv] = useState("")
  const [updateEv, setUpdateEv] = useState("")
  const [events, setEvents] = useState([])
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [step, setStep] = useState("")
  const [views, setViews] = useState({})
  const [defaultView, setDefaultView] = useState("")
  const [locations, setLocations] = useState([])
  const [dpr, setDpr] = useState(false)

  const mainCal = `form[action*="${calAppKey}"]`

  useEffect(()=> {
    document.addEventListener('DataPageReady', (e)=> {
      if (e.detail.appKey === calAppKey) {
        setDpr(true)
        setDpr(false)
      }
    })
  }, [events])

  useEffect(()=>{
    document.addEventListener('DataPageReady', (e)=> {
      if (e.detail.appKey === calAppKey) renderEvents()
    })
  }, [dpr])

  useEffect(()=> {
    renderOptions()
  }, [events])

  useEffect(()=> {
    document.addEventListener('DataPageReady', (e)=> {
      if (e.detail.appKey === calAppKey) {
        const field = document.querySelector(`${mainCal} [name="cbParamVirtual1"]`)
        const intv = setInterval(()=> {
          if (field.value !== '') {
            clearInterval(intv)
            const obj = JSON.parse(field.value)
            setAccount(obj.account)
            setNewEv(obj.newEvent)
            setUpdateEv(obj.updateEvent)
            setMin(obj.min)
            setMax(obj.max)
            setStep(obj.step)
            if (obj.view === 'Views.MONTH') setDefaultView(Views.MONTH)
            if (obj.view === 'Views.WEEK') setDefaultView(Views.WEEK)
            if (obj.view === 'Views.WORK_WEEK') setDefaultView(Views.WORK_WEEK)
            if (obj.view === 'Views.DAY') setDefaultView(Views.DAY)
            if (obj.view === 'Views.AGENDA') setDefaultView(Views.AGENDA)
            const mo = obj.views.month ? true : false
            const w = obj.views.week ? true : false
            const ww = obj.views.work_week ? true : false
            const d = obj.views.day ? true : false
            const a = obj.views.agenda ? true : false
            setViews(
              {
                month: mo,
                week: w, 
                work_week: ww, 
                day: d, 
                agenda: a
              }
            )
          }
        }, 10)
      }
      
    })
  }, [])

  const renderOptions = ()=> {
    if(document.querySelectorAll(`${mainCal} [id*="DataRow"]`)[0]) {
      const field = document.querySelectorAll(`${mainCal} [id*="DataRow"]`)[0]
      const val = field.querySelector(`${mainCal} td:nth-of-type(1)`).innerHTML
      let arr = []
      let pairs = val.split(',')
      pairs.forEach((pair)=> {
        let p = pair.split('*')
        arr.push(p)
      })
      setLocations(arr)
    }
  }

  const renderEvents = ()=> {
    let ev = []
    const rows = document.querySelectorAll(`${mainCal} [id*="DataRow"]`)
    rows.forEach((row)=>{
      let obj = {
        rid: row.querySelector(`${mainCal} td:nth-of-type(2)`).innerHTML,
        title: row.querySelector(`${mainCal} td:nth-of-type(3)`).innerHTML,
        start: new Date(row.querySelector(`${mainCal} td:nth-of-type(4) > time`).innerHTML),
        end: new Date(row.querySelector(`${mainCal} td:nth-of-type(5) > time`).innerHTML),
        resourceId: row.querySelector(`${mainCal} td:nth-of-type(6)`).innerHTML,
      }
      ev.push(obj)
    })
    setEvents(ev)
  }

  
  const localizer = momentLocalizer(moment)


  function setDate(date) {
    return date.toLocaleString("en-US", {timeZone: "EST"}).replace(',', '')
  }

  const onNavigate = (newDate, range) => {
    //console.log('newDate: '+JSON.stringify(newDate))
    //console.log('view: '+range)
    let firstDay
    let lastDay
    if (range === 'month') {
      firstDay = setDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
      lastDay = setDate(new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0));
    } else if (range === 'week' || range === 'work_week') {
      firstDay = setDate(moment(newDate).startOf('week').toDate());
      lastDay = setDate(moment(newDate).endOf('week').toDate());
    } else if (range === 'day' && newDate instanceof Date) {
      //console.log(range)
      //console.log(newDate)
      firstDay = setDate(newDate)
      lastDay = new Date(newDate)
        .toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }
        ) + ' 11:59:00 PM'
    } else if (range === 'agenda' && newDate instanceof Date) {
      //console.log(newDate)
      //console.log(range)
      firstDay = setDate(newDate)
      lastDay = (newDate.getMonth() + 2 === 13 ? 1 : newDate.getMonth() + 2) +
      '/' + (newDate.getDate() + 1) +'/' + 
      (newDate.getMonth() + 1 === 12 ? (newDate.getFullYear() + 1) :  + 
      newDate.getFullYear()) + ' 11:59:00 PM'
    } else if (newDate.start && range === 'agenda') {
      //console.log(newDate)
      firstDay = setDate(new Date(newDate.start))
      lastDay = setDate(new Date(newDate.end))
    }
    //console.log('firstDay: '+firstDay)
    //console.log('lastDay: '+lastDay)
    document.querySelector(`${mainCal} #Value2_1`).value = firstDay
    document.querySelector(`${mainCal} #Value3_1`).value = lastDay
    document.querySelector(`${mainCal} [name="searchID"]`).click()  
    document.addEventListener('DataPageReady', ()=> {
      setTimeout(()=> {
        renderEvents()
      }, 500)
    })
  }

  const onRangeChange = useCallback((newDate, view) => {
    //console.log('newDate: '+JSON.stringify(newDate))
    //console.log('view: '+view)
    let firstDay
    let lastDay
    if (view === 'month') {
      firstDay = setDate(newDate.start)
      lastDay = setDate(newDate.end)
    } else if (view === 'week' || view === 'work_week') {
      firstDay = setDate(newDate[0])
      lastDay = new Date(newDate[newDate.length - 1])
        .toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }
        ) + ' 11:59:00 PM'
    } else if (Array.isArray(newDate) && newDate.length === 1) {
      firstDay = setDate(newDate[0])
      lastDay = new Date(newDate[0])
        .toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }
        ) + ' 11:59:00 PM'
    } else if (newDate.start && view === 'agenda') {
      //console.log(newDate)
      firstDay = setDate(new Date(newDate.start))
      lastDay = setDate(new Date(newDate.end))
    } else if (newDate instanceof Date && view === 'agenda') {
      firstDay = setDate(newDate)
      lastDay = (newDate.getMonth() + 2 === 13 ? 1 : newDate.getMonth() + 2) +
      '/' + (newDate.getDate() + 1) +'/' + 
      (newDate.getMonth() + 1 === 12 ? (newDate.getFullYear() + 1) :  + 
      newDate.getFullYear()) + ' 11:59:00 PM'
      //console.log(lastDay)
    } 
    //console.log(newDate)
    //console.log('firstDay: '+firstDay)
    //console.log('lastDay: '+ lastDay)
    document.querySelector(`${mainCal} #Value2_1`).value = firstDay
    document.querySelector(`${mainCal} #Value3_1`).value = lastDay
    document.querySelector(`${mainCal} [name="searchID"]`).click()  
    document.addEventListener('DataPageReady', ()=> {
      setTimeout(()=> {
        renderEvents()
      }, 500)
    })
  })

  const eventPropGetter = useCallback(
    (event) => {
      for (let i = 0; i < locations.length; i++){
        let st = {
          style: {
            backgroundColor: locations[i][1]
          }
        }
        if (event.resourceId === locations[i][0]) {
          return st
        }
      }
    },
    [locations]
  )
  
  return (
    <div>
      {min && <Calendar
        onNavigate={onNavigate}
        onRangeChange={onRangeChange}
        dayLayoutAlgorithm="no-overlap"
        min={new Date(1972, 0, 1, min, 0, 0, 0)}
        max={new Date(1972, 0, 1, max, 0, 0, 0)}
        step={step}
        events={events}
        localizer={localizer}
        defaultView={defaultView}
        views={views}
        eventPropGetter={eventPropGetter}
      />}
    </div>
  );
}

export default RegCalendar;
