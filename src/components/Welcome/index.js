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
      //   this.setState(preState => {  //useless statements untill commnet ends
      //     console.log(preState)
      //     this.preState.status = false
      //     this.preState.texts = 'subscribed'
      //     return preState
      //   })
    } else {
      this.state.status = true
      this.state.texts = 'subscribe'
      this.setState(preState => preState)
      //   this.setState(preState => {   //useless statements untill commnet ends
      //     // preState.status = true
      //     // preState.texts = 'subscribe'
      //     console.log('else blockś')

      //     // return preState
      //   })
    }
  }

  render() {
    const {texts} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button type="button" onClick={this.onSub}>
          {texts}
        </button>
      </div>
    )
  }
}
export default Welcome
