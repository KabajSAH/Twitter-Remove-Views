const Better_SEL = 'a[href*="/analytics"]';

const mo = new MutationObserver(onMutation);
observe();

function onMutation() {
  if (document.querySelector(Better_SEL)) {
    mo.disconnect();
    deleteBetterViews();
    observe();
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}


function deleteBetterViews(){
  const viewCountElements = document.querySelectorAll(Better_SEL);
  if(viewCountElements){
    viewCountElements.forEach(e => {
      if(e.dataset.testid !== 'analyticsButton'&& e.dataset.testid !== 'analytics'){
        let elem = e;
        console.log(elem);
        console.log(!(elem.nextSibling || elem.previousSibling))
        while(!(elem.nextSibling || elem.previousSibling)){
          elem = elem.parentNode;
          console.log("dedans");
        }
        elem.remove();
      }
    });
  }
}
