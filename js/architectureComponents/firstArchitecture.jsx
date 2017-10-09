import React from 'react';
import ReactDOM from 'react-dom';


let firstPartImages = ['./images/image1.jpg','./images/image2.jpg','./images/image3.jpg','./images/image4.jpg','./images/image5.jpg','./images/image6.jpg']
class FirstComponentArchitecture extends React.Component{

  handleClickBigImage = event =>{
    let dataId = $(event.target).attr('data-id');
    let imageURL = $(event.target).css('background-image');
    let bigDiv = $("<div class='bigImagePopUp'></div>");
    let prevDiv = $("<div class='prevButton'></div>");
    let prevButton = $("<p>&lt;</p>")
    let nextDiv = $("<div class='nextButton'></div>");
    let nextButton = $("<p class='next'>&gt;</p>")
    let cross = $("<p class='cross fa fa-times'></p>");
    let bigImage = $(`<div class='bigImage' style=background-image:${imageURL}></div>`);
    let bigImageSection = $('<div class="bigImageSection"></div>');
    prevDiv.append(prevButton);
    nextDiv.append(cross);
    nextDiv.append(nextButton);
    bigDiv.append(prevDiv);
    bigDiv.append(bigImage);
    bigDiv.append(nextDiv);
    bigImageSection.append(bigDiv);
    $('body').prepend(bigImageSection);
    cross.on('click',()=>{
      bigImageSection.remove();
    })
    nextButton.on('click',()=>{
      dataId++;
      if(dataId<firstPartImages.length){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
      }
      else{
        dataId=0;
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
    bigDiv.swipeleft(()=>{
      dataId++;
      if(dataId<firstPartImages.length){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
      }
      else{
        dataId=0;
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
    prevButton.on('click',()=>{
      dataId--;
      if(dataId>-1){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
      }
      else{
        dataId=firstPartImages.length-1;
        bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
      bigDiv.swiperight(()=>{
        dataId--;
        if(dataId>-1){
          bigImage.remove();
          bigDiv.append(bigImage);
          bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
        }
        else{
          dataId=firstPartImages.length-1;
          bigImage.css('background-image',`url(${firstPartImages[dataId]}`)
          bigImage.remove();
          bigDiv.append(bigImage);
        }
      })
  }
  render(){
    return    <div className="content">
                  {firstPartImages.map((url, index)=>{
                      return <div onClick={this.handleClickBigImage} key={index} data-id={index} style={{backgroundImage:`url(${url})`}} className="image"></div>
                    })
                  }
                </div>


  }
}


export default FirstComponentArchitecture
