//document.querySelectorAll("div.css-1dbjc4n.r-18u37iz.r-1h0z5md>a").forEach( e => e.parentNode.remove());

const Main_TL_SEL = 'div.css-1dbjc4n.r-18u37iz.r-1h0z5md>a';
const Focus_Tweet_SEL = 'div.css-1dbjc4n.r-2sztyj.r-1efd50x.r-5kkj8d.r-13awgt0.r-18u37iz.r-tzz3ar.r-s1qlax.r-1yzf0co>div.css-1dbjc4n.r-1mf7evn>div.css-1dbjc4n>a';
const Focus_Tweet_Regex = new RegExp('^.*\/analytics$');
const mo = new MutationObserver(onMutation);
observe();

function onMutation() {
  if (document.querySelector(Main_TL_SEL)) {
    mo.disconnect();
    deleteMainTLViews();
    observe();
  }
  if (document.querySelector(Focus_Tweet_SEL)) {
    mo.disconnect();
    deleteFocusTweetViews();
    observe();
  }
}

function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

function deleteMainTLViews(){
  const viewCountElements = document.querySelectorAll(Main_TL_SEL)
  if(viewCountElements){
    viewCountElements.forEach(e => e.parentNode.remove());
  }
}

function deleteFocusTweetViews(){
  const viewCountElements = document.querySelectorAll(Focus_Tweet_SEL)
  if(viewCountElements){
    viewCountElements.forEach(e => {

      if(e.href.match(Focus_Tweet_Regex))
        e.parentNode.parentNode.remove()


    });
  }
}
