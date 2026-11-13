

export const setTitle = (title)=>{
  const ORIGINAL_TITLE = 'NIFLIX - Your favorite e-commerce store';    
  const getTitle = document.querySelector('title');
  if(title) getTitle.innerText = title
  else getTitle.innerText = ORIGINAL_TITLE
      
    }