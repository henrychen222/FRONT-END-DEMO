import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./ComponentTutorialspoint/Header";
import Content from "./ComponentTutorialspoint/Content";
import Data from "./ComponentTutorialspoint/Data";
import State from "./ComponentTutorialspoint/State";
import Props from "./ComponentTutorialspoint/Props";
import DefaultProps from "./ComponentTutorialspoint/DefaultProps";
import StateAndProps from "./ComponentTutorialspoint/StateAndProps";
import PropsValidation from "./ComponentTutorialspoint/PropsValidation";
import ComponentAPIsetState from "./ComponentTutorialspoint/ComponentAPIsetState";
import ComponentAPIForceUpdate from "./ComponentTutorialspoint/ComponentAPIForceUpdate";
import ComponentAPIFindDomNode from "./ComponentTutorialspoint/ComponentAPIFindDomNode";
import ComponentLifeCycle from "./ComponentTutorialspoint/ComponentLifeCycle";
import FormsSimple from "./ComponentTutorialspoint/FormsSimple";
import FormComplex from "./ComponentTutorialspoint/FormComplex";
import Events from "./ComponentTutorialspoint/Events";
import ChildEvents from "./ComponentTutorialspoint/ChildEvents";
import References from "./ComponentTutorialspoint/References";
import Keys from "./ComponentTutorialspoint/Keys";


import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import RouterExample from './ComponentTutorialspoint/RouterTest/RouteExample'
import Home from './ComponentTutorialspoint/RouterTest/Home'
import About from './ComponentTutorialspoint/RouterTest/About'
import Contact from './ComponentTutorialspoint/RouterTest/Contact'
import Animations from "./ComponentTutorialspoint/Animations";
import AnimationEnterLeave from "./ComponentTutorialspoint/AnimationEnterLeave";
import HOC from "./ComponentTutorialspoint/HOC";
import App_ReactOfficialMain from "./ComponentOfficialDoc/App_ReactOfficialMain";

function App() {
    return (
        <div className="App">

            {/*Components*/}
            <Header/>
            <Content/>
            <Data/>

            {/*State*/}
            <State/>
            <br/><br/>

            {/*Props Overview*/}
            <Props headerProp="Header from props..." contentProp="Content from props..."/>
            <br/>
            <DefaultProps/>
            <br/>
            <StateAndProps/>
            <br/>

            {/*Props Validation*/}
            <PropsValidation/>
            <br/>

            {/*Component API*/}
            <ComponentAPIsetState/>
            <br/>
            <ComponentAPIForceUpdate/>
            <br/>
            <ComponentAPIFindDomNode/>
            <br/>

            {/*Component Life Cycle*/}
            <ComponentLifeCycle/>
            <br/>

            {/*Forms*/}
            <FormsSimple/>
            <br/>
            <FormComplex/>
            <br/>

            {/*Events*/}
            <Events/>
            <br/>
            <ChildEvents/>
            <br/>

            {/*References*/}
            <References/>
            <br/>

            {/*Keys*/}
            <Keys/>


            {/*<Router history={browserHistory}>*/}
            {/*    <Route path="/" component={RouterExample}>*/}
            {/*        <IndexRoute component={Home}/>*/}
            {/*        <Route path="home" component={Home}/>*/}
            {/*        <Route path="about" component={About}/>*/}
            {/*        <Route path="contact" component={Contact}/>*/}
            {/*    </Route>*/}
            {/*</Router>*/}


            {/*Animations*/}
            <Animations/>
            <br/>
            <AnimationEnterLeave/>
            <br/>

            {/*Higher Order Components*/}
            <HOC/>
            <br/>


            {/*<Comment*/}
            {/*    date={comment.date}*/}
            {/*    text={comment.text}*/}
            {/*    author={comment.author}*/}
            {/*/>*/}

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <App_ReactOfficialMain/>
        </div>
    );
}

export default App;
