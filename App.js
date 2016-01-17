import React from 'react';

class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            page: 1,
            prevPage: 0,
            nextPage: 2
        }
    }
    
    updatePage ({ prevPage, nextPage}) {
        //Prev page
        if (prevPage) {
            this.setState({
                page: prevPage,
                prevPage: prevPage - 1,
                nextPage: prevPage + 1
            })
        } else {
            this.setState({
                page: nextPage,
                prevPage: nextPage - 1,
                nextPage: nextPage + 1
            })
        }
    }
    
    render() {
        let lessonNum = this.props.lessonNum
        let { page, prevPage, nextPage } = this.state;
        return (
            <div>
            <h1>This is React lessons : {lessonNum}</h1>
            <div>Page : {page}</div>
            
            <div><a href="#" onClick={this.updatePage.bind(this, {prevPage})}>Previous page: {prevPage}</a></div>
            <div><a href="#" onClick={this.updatePage.bind(this, {nextPage})}>Next page: {nextPage}</a></div>
            </div>
        )
    }
}

App.propTypes = {
    lessonNum: React.PropTypes.number
}

App.defaultProps = {
    lessonNum : 1
}

export default App