// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  // state = {status: true, texts: 'subscribe'}    mistake done

  state = {status: true, texts: 'subscribe'}

  onSub = () => {
    const {status, texts} = this.state
    console.log(status)
    console.log(texts)

    if (status === true) {
      this.state.status = false
      this.state.texts = 'subscribed'

      this.setState(preState => preState)
    } else {
      this.state.status = true
      this.state.texts = 'subscribe'
      this.setState(preState => preState)
    }
  }

  render() {
    const {texts} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button type="button" onClick={this.onSub}>
          {texts}
        </button>
      </div>
    )
  }
}
export default Welcome
