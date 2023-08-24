document.addEventListener("DOMContentLoaded", function() {
    let usageHistory = [
      { id: 1, description: "사용 내역", time: '2023-08-21 10:30 AM' },
      { id: 2, description: "사용 내역", time: '2023-08-21 10:30 AM' },
      { id: 3, description: "사용 내역", time: '2023-08-21 10:30 AM' },
      { id: 4, description: "사용 내역", time: '2023-08-21 10:30 AM' },
      // ... 추가 사용내역 데이터
    ];
  
    const usageHistoryContainer = document.getElementById("usageHistoryContainer");
  
    usageHistory.forEach(use => {
      const usageBox = document.createElement("div");
      usageBox.className = "usage-box";
  
      const usageHistoryDiv = document.createElement("div");
      usageHistoryDiv.className = "usage-history";
  
      const h2 = document.createElement("h2");
      h2.className = "usage-description";
      h2.innerText = `${use.id}. ${use.description}`;
  
      const p = document.createElement("p");
      p.className = "usage-time";
      p.innerText = `이용 시간: ${use.time}`;
  
      usageHistoryDiv.appendChild(h2);
      usageHistoryDiv.appendChild(p);
  
      usageBox.appendChild(usageHistoryDiv);
      usageHistoryContainer.appendChild(usageBox);
    });
  });