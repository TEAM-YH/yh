import React from 'react'
import './productTabs.css'

export default function ProductDetailTab({ product }) {
  if (!product) return <div>상품 정보를 불러오는 중...</div>

  // imageType이 '300'인 상세이미지들만 추출 후 001_300, 002_300, 003_300 순서로 정렬
  const detailImages = Array.isArray(product.images)
    ? product.images
        .filter((img) => img.imageType === '300')
        .sort((a, b) => {
          const getNum = (name) => {
            const match = name.match(/_(\d{3})_300/)
            return match ? parseInt(match[1], 10) : 0
          }
          return getNum(a.imageName) - getNum(b.imageName)
        })
    : []

  return (
    <div className="product-detail-tab">
      <div className="detail-section">
        <h4>상품 설명</h4>
        <p>
          {(
            product.productDescription ||
            '등록된 상품 설명이 없습니다.'
          )
            .split('\n')
            .map((line, idx, arr) => (
              <React.Fragment key={idx}>
                {line}
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
        </p>
      </div>

      <div className="detail-section">
        <h4>상품 이미지</h4>
        <div className="product-images">
          {detailImages.length === 0 ? (
            <div style={{ color: '#aaa' }}>등록된 상세 이미지가 없습니다.</div>
          ) : (
            detailImages.map((img) => (
              <img
                key={img.imageId || img.imageName}
                src={`/static/${img.imagePath}/${img.imageName}`}
                alt={product.productName}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                  border: '1px solid #ddd',
                  marginBottom: 16,
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
