import React, { useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { WrapperChart, WrapperFilter, WrapperHeader } from './styled'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import api from '../../../config/axios'
import moment from 'moment'
const LineChart = () => {
  const chartComponentRef = useRef(null)
  const [filter, setFilter] = useState('year')
  const [active, setActive] = useState('year')
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const [dataChart, setDataChart] = useState([])
  const dateFormat = [
    {
      startDate: dateRange[0]
        ? moment(dateRange[0]).format('YYYY-MM-DD')
        : null,
      endDate: dateRange[1] ? moment(dateRange[1]).format('YYYY-MM-DD') : null,
    },
  ]
  const checkDatePicker = dateFormat.filter((item) => !item?.startDate)

  const handleGetChartData = async () => {
    if (checkDatePicker.length) {
      const result = await api.get(
        `/bodyrecord?${filter}=${moment(new Date()).format('YYYY-MM-DD')}`,
        { headers: { 'Access-Control-Allow-Origin': '*' } },
      )
      setDataChart(result?.data)
    } else {
      const result = await api.get(
        `/bodyrecord?startDate=${moment(dateFormat[0].startDate).format(
          'YYYY-MM-DD',
        )}&endDate=${
          dateFormat[0].endDate
            ? moment(dateFormat[0].endDate).format('YYYY-MM-DD')
            : moment(dateFormat[0].startDate).format('YYYY-MM-DD')
        }`,
      )
      setDataChart(result?.data)
    }
  }
  const filterOptions = [
    {
      title: '日',
      value: 'date',
    },
    {
      title: '週',
      value: 'week',
    },
    {
      title: '月',
      value: 'month',
    },
    {
      title: '年',
      value: 'year',
    },
  ]
  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: '#414141',
      spacing: [80, 40, 20, 40],
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
      ],
      labels: {
        style: {
          color: '#FFFFFF',
        },
      },
    },
    colors: ['#FFCC21', '#8FE9D0'],
    yAxis: [
      {
        id: 'y_axis_0',
        gridLineWidth: 0.2,
        gridZIndex: 2,
        title: '',
        labels: {
          formatter: function () {
            return ''
          },
        },
      },
      {
        id: 'y_axis_1',
        gridLineWidth: 0.2,
        gridZIndex: 2,
        title: '',
        labels: {
          formatter: function () {
            return ''
          },
        },
      },
    ],

    series: [
      {
        yAxis: 'y_axis_0',
        name: '',
        data: dataChart.map((item) => item.bodyFat),
      },
      {
        yAxis: 'y_axis_1',
        name: '',
        data: dataChart.map((item) => item.bodyWeight),
      },
    ],
  }

  const handleClick = (title) => {
    setActive(title)
    setFilter(title)
  }

  useEffect(() => {
    handleGetChartData()
  }, [filter, dateRange])

  return (
    <WrapperChart className="relative">
      <WrapperHeader className="absolute top-4 left-10 z-20 flex items-center gap-8">
        <span className="uppercase text-[18px] text-white">
          Body <br /> record
        </span>
        <div>
          <DatePicker
            className="cursor-pointer outline-none px-2 py-1 rounded"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update)
            }}
            isClearable={true}
          />
        </div>
      </WrapperHeader>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartComponentRef}
      />
      <WrapperFilter className="flex items-center gap-4 absolute bottom-4 left-10">
        {filterOptions.map((item, index) => (
          <span
            className={
              active === item.value
                ? 'text-center bg-yellow300 text-white rounded-full cursor-pointer w-[56px] h-[24px]'
                : 'text-center bg-white text-yellow300 rounded-full cursor-pointer w-[56px] h-[24px]'
            }
            key={index}
            onClick={() => handleClick(item.value)}
          >
            {item.title}
          </span>
        ))}
      </WrapperFilter>
    </WrapperChart>
  )
}

export default React.forwardRef(LineChart)
