import React, { useEffect, useState } from 'react'
import CustomSelect from '../../components/common/CustomSelect'
import CustomRadio from '../../components/common/CustomRadio'
import ForecastChart from '../../components/chart/ForecastChart'
import DividerLine from '../../components/chart/DividerLine'
import PriceChangeTableDetail from '../../components/chart/PriceChangeTableDetail'
import axios from 'axios'
import ReportDownloadButton from '../../components/chart/ReportDownloadButton'

const PriceChartPage = () => {
  // 폼 데이터 저장
  const [form, setForm] = useState({
    midCodeValue: '',
    midCodeName: '',
    lowCodeValue: '',
    lowCodeName: '',
    timeFrame: 'week',
  })

  // 부류 선택 처리
  const handleMidCodeSelect = (value) => {
    setForm((prev) => ({ ...prev, midCodeValue: value }))
  }

  // 품목 선택 처리
  const handlelowCodeSelect = (selectedOption) => {
    const selectedItem = lowItems.find((item) => item.value === selectedOption)
    setForm((prev) => ({
      ...prev,
      lowCodeValue: selectedOption,
      lowCodeName: selectedItem ? selectedItem.label : '',
    }))
  }

  // 기간 선택 처리
  const handlePeriodChange = (value) => {
    setForm((prev) => ({ ...prev, timeFrame: value }))
  }

  // 선택한 부류 값 저장
  const [midItems, setMidItems] = useState([])

  // 선택한 품목 값 저장
  const [lowItems, setLowItems] = useState([])

  // 부류 코드 리스트 불러오기
  useEffect(() => {
    axios.get('/common/midList').then((res) => {
      const items = res.data.map((code) => ({
        value: code.midCodeValue,
        label: code.midCodeName,
      }))

      setMidItems(items)
    })
  }, [])

  // 품목 값 가져오기
  useEffect(() => {
    if (!form.midCodeValue) {
      return
    }

    axios.get(`/common/lowList?midCodeValue=${form.midCodeValue}`).then((res) => {
      const items = res.data.map((code) => ({
        value: code.lowCodeValue,
        label: code.lowCodeName,
      }))

      setLowItems(items)
    })
  }, [form.midCodeValue])

  return (
      <div style={{margin:'40px 0'}}>
        <h2>시세 추이</h2>
        <div style={{ margin: '20px 0 0 0' }}>
          {/* 선택 박스 */}
          <div className="input-group">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: '20px',
                }}
              >
                <label
                  htmlFor="midCodeValue"
                  className="input-label"
                  style={{ marginRight: '10px', fontSize: '18px' }}
                >
                  부류
                </label>
                <CustomSelect
                  placeholder="부류를 선택하세요"
                  onChange={handleMidCodeSelect}
                  options={midItems}
                  style={{ width: '200px' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <label
                  htmlFor="lowCodeValue"
                  className="input-label"
                  style={{ marginRight: '10px', fontSize: '18px' }}
                >
                  품목
                </label>
                <CustomSelect
                  placeholder="품목을 선택하세요"
                  onChange={handlelowCodeSelect}
                  options={lowItems}
                  style={{ width: '200px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom:'10px' }}>
              <label
                htmlFor="selectedPeriod"
                className="input-label"
                style={{ marginRight: '10px', fontSize: '18px' }}
              >
                기간
              </label>
              <CustomRadio
                value={form.timeFrame}
                onChange={handlePeriodChange}
                options={[
                  { value: 'week', label: '주간' },
                  { value: 'month', label: '월간' },
                  { value: 'year', label: '연간' },
                ]}
              />
            </div>
            <ReportDownloadButton form={form}></ReportDownloadButton>
          </div>

          <div className="viewChart">
            <h2 style={{ marginTop: '60px',fontSize:'22px' }}>시세 추이 그래프</h2>

            {form.lowCodeValue === '' ? (
              <p>품목을 선택하면 시세 그래프가 표시됩니다.</p>
            ) : (
              <div>
                <h3>실거래 가격(도매)</h3>
                <ForecastChart detailCodeId={form.lowCodeValue} timeFrame={form.timeFrame} />
              </div>
            )}

            <DividerLine />

            <h2 style={{fontSize:'22px'}}>등락율</h2>

            <PriceChangeTableDetail/>

          </div>
        </div>
      </div>
  )
}

export default PriceChartPage
