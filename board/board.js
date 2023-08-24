document.addEventListener("DOMContentLoaded", function() {
    let board = [
      { id: 1, start:"start", end:"end", many: "1", time: '2023-08-21 10:30 AM' },
      { id: 2, start:"start", end:"end", many: "2", time: '2023-08-21 10:30 AM' },
      { id: 3, start:"start", end:"end", many: "3", time: '2023-08-21 10:30 AM' },
      { id: 4, start:"start", end:"end", many: "2", time: '2023-08-21 10:30 AM' },
      { id: 5, start:"start", end:"end", many: "3", time: '2023-08-21 10:30 AM' },
      { id: 6, start:"start", end:"end", many: "1", time: '2023-08-21 10:30 AM' },
      { id: 7, start:"start", end:"end", many: "3", time: '2023-08-21 10:30 AM' },
      { id: 8, start:"start", end:"end", many: "3", time: '2023-08-21 10:30 AM' },
      // ... 추가 사용내역 데이터
    ];
  
    const boardContainer = document.getElementById("boardContainer");
  
    board.forEach(use => {
      const boardBox = document.createElement("div");
      boardBox.className = "board-box";
  
      const boardDiv = document.createElement("div");
      boardDiv.className = "board-history";
  
      const h2 = document.createElement("h2");
      h2.className = "board-content";
      h2.innerText = `${use.id}. ${use.start} -> ${use.end} 택시 타요!`;

      boardBox.addEventListener("click", function() {
        // 클릭한 박스의 id 값을 detail.html로 전달하여 페이지 이동
        window.location.href = `detail.html?id=${use.id}&start=${use.start}&end=${use.end}&many=${use.many}`;
      });
  
      const p = document.createElement("p");
      p.className = "board-time";
      p.innerText = `출발 시간: ${use.time}`;
  
      boardDiv.appendChild(h2);
      boardDiv.appendChild(p);
  
      boardBox.appendChild(boardDiv);
      boardContainer.appendChild(boardBox);
    });
});