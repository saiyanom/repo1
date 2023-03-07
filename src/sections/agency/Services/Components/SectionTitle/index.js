import React from 'react';
import { SuperTag } from '~components';
import SectionTitle from "./style";
export default function SectionTitleBlock({subTitleProps,titleProps,textProps,title2,subTitle,title,text,...rest}){
return(
<SectionTitle {...rest}>
        {/* <SectionTitle.Subtitle  {...subTitleProps}>
             <SuperTag value={subTitle}/>
        </SectionTitle.Subtitle> */}
        <SectionTitle.Main className="main-head" {...titleProps} as="h2">
             <SuperTag value={title}/><br /><b>{title2}</b>
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


