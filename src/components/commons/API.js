import { Component } from "React"

const fetchData = (ComposedComponent, config) => class extends Component {
    state = { data: null }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios({
            method: config.method,
            url: config.url,
            data: config.body
        })
        .then(data => {
            console.log(data)
            this.setState({ data })
        })
        .catch(error => {
            const _error = new Error(error)
            throw _error
        })
    }

    render() {
        return this.state.data
            ? <ComposedComponent {...this.props} {...data} />
            : <PreloaderComponent />
    }
}