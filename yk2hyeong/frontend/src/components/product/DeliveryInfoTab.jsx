import React from 'react'
import './productTabs.css'

export default function DeliveryInfoTab({ product }) {
  return (
    <div className="delivery-info-tab">
      <h3>배송/반품 정보</h3>

      <div className="delivery-section">
        <h4>배송 정보</h4>
        <div className="delivery-details">
          <div className="detail-item">
            <strong>배송 지역:</strong>
            <span>전국 (일부 도서산간 지역 제외)</span>
          </div>
          <div className="detail-item">
            <strong>배송 방법:</strong>
            <span>택배 (CJ대한통운, 로젠택배) // 직접 수령 원하실 경우 문의 주세요.</span>
          </div>
          <div className="detail-item">
            <strong>배송 기간:</strong>
            <span>출고 후 1-3일 (영업일 기준)</span>
          </div>
          <div className="detail-item">
            <strong>배송비:</strong>
            <span>5kg 단위로 박스 분할, 박스 당 3,000원</span>
          </div>
          <div className="detail-item">
            <strong>출하 예정일:</strong>
            <span>
              - 즉시 구매: 오전 11시 이전 주문 시 당일 출고, 오전 11시 이후 주문 시 익일 출고
            </span>
            <span>- 예약구매: 판매종료일자 익일 출고 (상품카드 참고)</span>
          </div>
        </div>
      </div>

      <div className="return-section">
        <h4>반품/교환 정보</h4>
        <div className="return-details">
          <div className="detail-item">
            <strong>반품 기간:</strong>
            <span>수령일로부터 2일 이내</span>
          </div>
          <div className="detail-item">
            <strong>반품 조건:</strong>
            <span>상품 불량, 오배송</span>
          </div>
          <div className="detail-item">
            <strong>반품 불가:</strong>
            <span>고객 변심, 상품 사용/훼손</span>
          </div>
          <div className="detail-item">
            <strong>반품비:</strong>
            <span>판매자 부담</span>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h4>문의 연락처</h4>
        <div className="contact-details">
          <div className="detail-item">
            <strong>판매자:</strong>
            <span>{product.sellerCompany}</span>
          </div>
          <div className="detail-item">
            <strong>연락처:</strong>
            <span>{product.sellerTel}</span>
          </div>
          <div className="detail-item">
            <strong>이메일:</strong>
            <span>{product.sellerEmail}</span>
          </div>
          <div className="detail-item">
            <strong>운영시간:</strong>
            <span>평일 09:00-18:00 (주말/공휴일 휴무)</span>
          </div>
        </div>
      </div>

      <div className="notice-section">
        <h4>배송 관련 안내사항</h4>
        <ul>
          <li>신선식품 특성상 출하일 기준으로 배송됩니다.</li>
          <li>신선식품 특성상 상품 불량, 오배송 외 반품 불가능합니다.</li>
          <li>기상 상황에 따라 배송 일정이 변경될 수 있습니다.</li>
          <li>배송 중 상품 손상 시 즉시 연락 주시기 바랍니다.</li>
        </ul>
      </div>
    </div>
  )
}
