import React from 'react';
import { SuperTag } from '~components';
import SectionTitle from "./style";
export default function SectionTitleBlock({subTitleProps,titleProps,textProps,subTitle,title,title2,text,...rest}){
return(
<SectionTitle {...rest}>
        {/* <SectionTitle.Subtitle  {...subTitleProps}>
             <SuperTag value={subTitle}/>
        </SectionTitle.Subtitle> */}
        <SectionTitle.Main {...titleProps}>
             <SuperTag value={title}/>
             &nbsp;
             <SuperTag value={title2} className="blue-txt" />
        </SectionTitle.Main>
        {text ? <SectionTitle.Text {...textProps}>

             <SuperTag value={text}/>
        </SectionTitle.Text>: null}
</SectionTitle>
)
}
// export default function SectionTitleBlock(){
// return(
//     <SectionTitleBlock 
// subTitle="Hellow Bellow" 
// title=" Hellow Bellow title"
// text="Hellow Bellow text"
// subTitleProps={{mt:"20px", mb:"20px"}}
// titleProps={{mt:"20px", mb:"20px"}}
// textProps={{mt:"20px", mb:"20px"}}
// mb="20px" />
// )
// }


