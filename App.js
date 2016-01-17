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
    
    updatePage (e) {
        
    }
    
    render() {
        let lessonNum = this.props.lessonNum
        let { page, prevPage, nextPage } = this.state;
        return (
            <div>
            <h1>This is React lessons : {lessonNum}</h1>
            <div>Page : {page}</div>
            
            <div><a href="#" pageNum={prevPage} onClick={this.updatePage.bind(this)}>Previous page</a></div>
            <div><a href="#" pageNum={nextPage} onClick={this.updatePage.bind(this)}>Next page</a></div>
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