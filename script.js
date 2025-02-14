document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let progressValue = bar.getAttribute("data-progress");

        // Đặt width ban đầu là 0 để hiệu ứng chạy từ trái qua phải
        bar.style.width = "0%";

        // Chạy hiệu ứng sau 500ms khi load web
        setTimeout(() => {
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = `${progressValue}%`;
        }, 500);
    });
});
