import React from 'react'
import NameForm from './Form/NameForm'
import EssayForm from './Form/EssayForm'
import FlavorForm from "./Form/FlavorForm";
import Reservation from "./Form/Reservation";
import Calculator from "./LiftingStateUp/Calculator";
import Calculator2 from "./LiftingStateUp/Calculator2";
import Calculator3 from "./LiftingStateUp/Calculator3";
import WelcomeDialog from "./CompositionInheritance/WelcomeDialog";
import SplitPane from "./CompositionInheritance/SplitPane";
import Contacts from "./CompositionInheritance/Contacts";
import Chat from "./CompositionInheritance/Chat";
import WelcomeDialog2 from "./CompositionInheritance/WelcomeDialog2";
import SignUpDialog from "./CompositionInheritance/SignUpDialog";
import NumberListKey from "./ListsKeys/NumberListKey";
import NumberListNoKey from "./ListsKeys/NumberListNoKey";
import NumberList from "./ListsKeys/NumberList";
import Blog from "./ListsKeys/Blog";
import NumberListEmbedding from "./ListsKeys/NumberListEmbedding";

/**
 * functional/stateless component
 */
const App_ReactOfficialMain = () => {
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return (
        <div>
            <h1>Official Docs Demo start</h1>

            <h2>******************** Form ********************</h2>
            <NameForm/>
            <br/>
            <EssayForm/>
            <br/>
            <FlavorForm/>
            <br/>
            <Reservation/>
            <br/>

            <h2>******************** Lifting State Up ********************</h2>
            <Calculator/>
            <br/>
            <Calculator2/>
            <br/>
            <Calculator3/>
            <br/>

            <h2>******************** Composition vs Inheritance ********************</h2>
            <WelcomeDialog/>
            <br/>

            {/*Nothing shows*/}
            <SplitPane
                left={<Contacts/>}
                right={<Chat/>}
            />
            <br/>

            <WelcomeDialog2/>
            <br/>
            <SignUpDialog/>
            <br/>

            <h2>******************** Lists and Keys ********************</h2>
            {/*left numbers is props for parent-child component communication*/}
            <NumberListNoKey numbers={numbers}/>
            <br/>
            <NumberListKey numbers={numbers}/>
            <br/>
            <NumberList numbers={numbers}/>
            <br/><br/><br/>
            <Blog posts={posts}/>
            <br/>
            <NumberListEmbedding numbers={numbers}/>

        </div>
    );
}

/**
 * class/stateful component
 */
// class App_ReactOfficialMain extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Official Docs Demo start</h1>
//                 <NameForm/>
//             </div>
//         );
//     }
// }

export default App_ReactOfficialMain
