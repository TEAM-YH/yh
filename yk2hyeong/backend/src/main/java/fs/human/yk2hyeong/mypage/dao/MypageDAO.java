package fs.human.yk2hyeong.mypage.dao;

import fs.human.yk2hyeong.mypage.vo.MypageVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MypageDAO {
    List<MypageVO> selectPurchasedProducts(String memberId);

    List<MypageVO> selectNotification(@Param("receiverId") String receiverId);

    List<MypageVO> selectSoldNotification(String receiverId);

//    카드 읽음 처리
    void updateIsRead(String alarmId);

//    마이페이지 알림 삭제
    void deleteNotification(@Param("alarmId") String alarmId);

    // 읽지 않은 알림 개수 조회
    int getUnreadNotificationCount(@Param("memberId") String memberId);
}
