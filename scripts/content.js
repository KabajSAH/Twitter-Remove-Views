//document.querySelectorAll("div.css-1dbjc4n.r-18u37iz.r-1h0z5md>a").forEach( e => e.parentNode.remove());

const SEL = 'div.css-1dbjc4n.r-18u37iz.r-1h0z5md>a';
const mo = new MutationObserver(onMutation);
observe();

function onMutation() {
  if (document.querySelector(SEL)) {
    mo.disconnect();
    deleteViews();
    observe();
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

function deleteViews(){
  const viewCountElements = document.querySelectorAll(SEL)
  if(viewCountElements){
    viewCountElements.forEach(e => e.parentNode.remove());
  }
}
