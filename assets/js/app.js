(function(){
  const target = new Date('2026-03-20T23:59:59+03:00').getTime();
  const el = document.getElementById('countdown');
  if(!el) return;
  function tick(){
    const d = target - Date.now();
    if(d<=0){el.textContent='انتهى العرض — تابع أحدث العروض 🎉';return;}
    const days=Math.floor(d/(1000*60*60*24));
    const hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
    const mins=Math.floor((d%(1000*60*60))/(1000*60));
    el.textContent=`⏳ ينتهي العرض خلال: ${days} يوم ${hrs} ساعة ${mins} دقيقة`;
  }
  tick();
  setInterval(tick,60000);
})();
