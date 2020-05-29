const isElementInViewport = (el: any) => {
  const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const nav =  document.getElementById('navigation');
    if(nav !== undefined && nav !== null){
      const navHeight = nav.offsetHeight;
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
      const vertInView = ((rect.top - (navHeight * 2)) <= windowHeight) && ((rect.top - (navHeight * 2) + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
      return (vertInView && horInView);
    }
}

export default isElementInViewport;