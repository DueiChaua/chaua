const data = [
    {
        content: "Toni-Ann Singh (sinh ngày 3 tháng 2 năm 1996) là ca sĩ và hoa hậu người Jamaica, cô đăng quang Hoa hậu Thế giới 2019. Trước đó cô đã đăng quang Hoa hậu Thế giới Jamaica 2019 và là người phụ nữ thứ tư đến từ Jamaica đăng quang cuộc thi Hoa hậu Thế giới và cô cũng là Hoa hậu Thế giới có nhiệm kỳ lâu nhất trong lịch sử của cuộc thi vì cuộc thi Hoa hậu Thế giới đã hủy phiên bản 2020 và hoãn phiên bản 2021 đến 2022 mới có thể tổ chức đêm chung kết. Vào năm 2019, Singh tham gia cuộc thi Hoa hậu Thế giới Jamaica 2019 và cuối cùng cô đã đăng quang ngôi vị hoa hậu...:",
        url: "./img/toni ann singh.jpg",
        href: "./toni ann singh.html"
    },
    {
        content: "(sinh ngày 18 tháng 9 năm 1993) là một người mẫu và nữ hoàng sắc đẹp người Nam Phi đã đăng quang Hoa hậu Hoàn vũ 2019. Năm 2019 cô đại diện Nam Phi tham gia đấu trường Hoa hậu hoàn vũ 2019 và xuất sắc đăng quang ngôi vị hoa hậu. Tunzi được sinh ra ở Tsolo, Đông Cape với cha mẹ Philiswa Nadapu và Lungisa Tunzi, và lớn lên ở ngôi làng Sidwadweni gần đó. Tunzi là con cả trong ba chị em.[4] Sau đó, cô chuyển đến Cape Town, định cư ở vùng ngoại ô Gardens, để theo học Đại học Công nghệ Cape Peninsula, nơi cô tốt nghiệp với bằng cử nhân về quan hệ công chúng và quản lý hình ảnh vào năm 2018...:",
        url: "./img/Zozibini Tunzi2.webp",
        href: "./Zozubini Tunzi.html"
    },
    {
        content: "Amelia Earhart là người Mỹ, nổi tiếng vì là một phụ nữ đầu tiên trên Thế giới làm phi công và cũng là nữ phi công can đảm...:",
        url: "./img/Amelia Earhart2.jpg",
        href: "./Amelia Earhart.html"
    }
]

let imgPost = document.getElementById('img-post');
let contentPost = document.getElementById('content-post');
let btnNext = document.getElementById('btn');
let link = document.getElementById('link-post');
let i = 0;
btnNext.onclick = function () {
    i++;
    if (i >= data.length) {
        i = 0;
    }
    imgPost.src = data[i].url;
    contentPost.innerText = data[i].content;
    link.href = data[i].href;

}