import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomTable from '../../components/common/CustomTable'
import CustomPagination from '../../components/common/CustomPagination'

const PriceChangeTable = ({ limit = null }) => {
  const [tableData, setTableData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [todayDate, setTodayDate] = useState('')
  const [yesterdayDate, setYesterdayDate] = useState('')

  const pageSize = 10 // 한 페이지당 항목 수

  // 날짜 포맷 함수 (YYYY-MM-DD → M/D)
  const formatDate = (sqlDate) => {
    if (!sqlDate) return ''
    const date = new Date(sqlDate)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}/${day}`
  }

  useEffect(() => {
    axios.get('/chart/price/dailyPriceDiff')
      .then((res) => {
        const data = res.data
        setTableData(data)

        if (data.length > 0) {
          setTodayDate(formatDate(data[0].toDay))
          setYesterdayDate(formatDate(data[0].yesterDay))
        }
      })
      .catch((err) => {
        console.error('시세 등락 정보 가져오기 실패', err)
      })
  }, [])

  const columns = [
    {
      title: '품목명',
      dataIndex: 'lowCodeName',
      key: 'lowCodeName',
      width: 120,
    },
    {
      title: `${yesterdayDate || '그제'} 평균가 (원)`,
      dataIndex: 'yesterdayPrice',
      key: 'yesterdayPrice',
      render: (price) => price?.toLocaleString(),
      width: 140,
    },
    {
      title: `${todayDate || '어제'} 평균가 (원)`,
      dataIndex: 'todayPrice',
      key: 'todayPrice',
      render: (price) => price?.toLocaleString(),
      width: 140,
    },
    {
      title: '등락 (원, %)',
      key: 'rate',
      render: (_, record) => {
        const diff = record.priceDiff
        const rate = record.priceDiffPercent
        const color = diff > 0 ? 'red' : diff < 0 ? 'blue' : 'black'
        const sign = diff > 0 ? '+' : ''

        return (
          <span style={{ color }}>
            {sign}{diff?.toFixed(0)}원 ({sign}{rate?.toFixed(2)}%)
          </span>
        )
      },
      width: 140,
    },
  ]

  // 페이징 처리
  const startIdx = (currentPage - 1) * pageSize
  const endIdx = startIdx + pageSize
  const pagedData = tableData.slice(startIdx, endIdx)
  const displayData = limit ? pagedData.slice(0, limit) : pagedData

  return (
    <div>
      <CustomTable
        columns={columns}
        data={displayData.map((item, index) => ({ key: index + startIdx, ...item }))}
        selectionType={null}
      />

      {/* 페이징 */}
      {!limit && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CustomPagination
            defaultCurrent={currentPage}
            total={tableData.length}
            onChange={(page) => setCurrentPage(page)}
            className="custom-pagination"
          />
        </div>
      )}

      <p className="trendy-price-caution" style={{ margin: '15px 0' }}>
        ※ 주말에는 최신 시세 데이터가 제공되지 않아, 가장 최근 평일(목요일 또는 금요일)의 가격을 참고용으로 표시합니다.<br />
        시세 추이는 어제와 그제의 가격을 비교하여 산출되며, 거래 내역이 있는 품목만 출력됩니다.
      </p>
    </div>
  )
}

export default PriceChangeTable
