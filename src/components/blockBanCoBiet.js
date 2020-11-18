/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import '../tachyons.min.css';

const BlockBanCoBiet = ({ id }) => {
  return (
    <div className="w-100 flex flex-wrap white blockBancobiet fw2" id={id}>
      <div className="w-100 w-40-l flex justify-end-l justify-center pv5 pr0 pr4-l">
        <div className="w-90">
          <p className="tieuDeBanCoBiet mb4 h5-l items-end flex">
            BẠN CÓ BIẾT?
          </p>

          <p className="noiDungBanCoBiet mb4">
            Theo báo cáo 2020 về những việc làm triển vọng của LinkedIn, kỹ sư
            công nghệ Machine learning (Học Máy) và AI (Trí tuệ nhân tạo) đứng
            đầu với như cầu tuyển dụng tăng trưởng 75% mỗi năm trong 4 năm gần
            với mức lương cao mơ ước.
          </p>
          <p className="noiDungBanCoBiet mb4">
            Trong khi đó, nguồn nhân lực chỉ đáp ứng được 10% nhu cầu thị trường
            Việt Nam
          </p>
          <p className="noiDungBanCoBiet mb4">
            Bạn có sẵn sàng đón đầu cơ hội này cùng VietAI
          </p>

          <div className="pv4 center tc">
            <iframe
              className="w-100 h5 h6-m h6-l"
              src="https://www.youtube.com/embed/HJneFoCxxHs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video"
            ></iframe>

            <p className="pv3 tl noiDungBanCoBiet">
              Hãy cùng nghe co-founder của VietAI - anh Thắng Lương điểm lại
              những thành công của học viên đạt được trước đây nhé!
            </p>
          </div>
        </div>
      </div>

      <div className="w-100 w-60-l bn bl-l bw1-l b--white-10 pv5">
        <div className="w-90 ph0 ph2-l center lh-copy f5 fw2">
          <p className="tieuDeBanCoBiet mb4 h5-l items-end flex">
            VÌ SAO BẠN NÊN HỌC <br />
            MACHINE LEARNING (HỌC MÁY) <br />
            TRỰC TUYẾN CÙNG VIET AI?
          </p>

          <ul className="plist noiDungBanCoBiet">
            <li className="pv3">
              Khóa học này dành cho tất cả mọi người từ sinh viên cho đến kỹ sư
              ở những lĩnh vực khác nhau.
            </li>
            <li className="pv3">
              Hình thức học trực tuyến vô cùng tiện lợi, bạn có thể học bất cứ
              đâu và bất cứ khi nào.
            </li>
            <li className="pv3">
              Cơ hội áp dụng kiến thức vào những vấn đề gần gũi với cuộc sống
              hàng này sau mỗi bài giảng.
            </li>
            <li className="pv3">
              Khóa học được cập nhật và giảng dạy chương trình mới nhất từ nước
              ngoài!
            </li>
            <li className="pv3">
              Xây dựng thêm mối quan hệ với những chuyên gia hàng đầu về AI đến
              từ Việt Nam và thung lũng Silicon.
            </li>
            <li className="pv3">
              Cơ hội được giới thiệu và làm việc tại các công ty công nghệ hàng
              đầu ở trong và ngoài nước.
            </li>
            <li className="pv3">
              Chứng chỉ của VietAI được công nhận ở nhiều tổ chức và công ty
              khác nhau cho quá trình kiếm việc.
            </li>
            <li className="pv3">
              Xây dựng nền tảng vững chắc cho những lớp học Deep Learning (Học
              Sâu) cơ bản và nâng cao của VietAI.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockBanCoBiet;
