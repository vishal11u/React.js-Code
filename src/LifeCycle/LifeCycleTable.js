import React, { Component } from 'react'

export default class LifeCycleTable extends Component {
  constructor() {
    super()
    this.state = {
      data:{
        name:'',
        username:'',
        email:'',
        address:{
          street:'',
          suite:'',
          city:'',
          geo:{
            lat:'',
            lng:'',
          }
        },
        phone:'',
        website:'',
        company:{
          bs:'',
          catchPhrase:'',
          name:'',
        }
      },

      tableData: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((ref) => {
        this.setState({ tableData: ref })
        console.log(ref);
      },[])
  }

 

  handleonchange =(e)=>{
    this.setState({data:{...this.state.data ,[e.target.name]:e.target.value }})
  }


  sumbit=()=>{
    this.setState({tableData: [...this.state.tableData,{...this.state.data }]});
  }


  render() {
    return (
      <div>
        <div className='font-semibold'>
          <legend>Name:- <input type="text" name='name' value={this.state.data.name} onChange={this.handleonchange} className="border" /></legend>
          <legend>UserName:- <input type="text" name='username' value={this.state.data.username} onChange={this.handleonchange} className="border" /></legend>
          <legend>Email:- <input type="text" name='email' value={this.state.data.email} onChange={this.handleonchange} className="border" /></legend>
          <div className=''>
            <h1 className='font-bold'>Address:-</h1>
            <div>
              <legend>street <input type="text" name='address.street' value={this.state.data.address.street} onChange={this.handleonchange} className="border" /></legend>
              <legend>suite <input type="text" name="address.suite" value={this.state.data.address.suite} onChange={this.handleonchange} className="border" /></legend>
              <legend>city <input type="text" name='address.city' value={this.state.data.address.city} onChange={this.handleonchange} className="border" /></legend>

              <h1>Geo-</h1>
              <legend>Lat <input type="text"  name='address.geo.lat' value={this.state.data.address.geo.lat} onChange={this.handleonchange} className="border" /></legend>
              <legend>Lng <input type="text"  name='address.geo.lng' value={this.state.data.address.geo.lng} onChange={this.handleonchange} className="border" /></legend>
            </div>
            </div>
            <legend>Phone:-<input type="text"  name='phone' value={this.state.data.phone} onChange={this.handleonchange} className="border" /></legend>
            <legend>website:-<input type="text"  name='website' value={this.state.data.website} onChange={this.handleonchange} className="border" /></legend>
            <div>
              <h1>Company</h1>
              <legend>bs <input type="text"  name='bs' value={this.state.data.company.bs} onChange={this.handleonchange} className="border" /></legend>
              <legend>catchPhrase <input type="text"  name='catchPharse' value={this.state.data.company.catchPhrase} onChange={this.handleonchange} className="border" /></legend>
              <legend>Name <input type="text"  name='name' value={this.state.data.company.name} onChange={this.handleonchange} className="border" /></legend>
            </div>

            <button onClick={this.sumbit} className='bg-blue-950'>submit</button>

          
        </div>


        <table border={1} style={{ border: '1px solid black' }}>
          <tr>
            <th style={{ border: '1px solid black' }} rowSpan={3}>id</th>
            <th style={{ border: '1px solid black' }} rowSpan={3}>name</th>
            <th style={{ border: '1px solid black' }} rowSpan={3}>username</th>
            <th style={{ border: '1px solid black' }} rowSpan={3}>email</th>
            <th style={{ border: '1px solid black' }} colSpan={5}>address</th>
            <th style={{ border: '1px solid black' }} rowSpan={3}>phone</th>
            <th style={{ border: '1px solid black' }} rowSpan={3}>website</th>
            <th style={{ border: '1px solid black' }} colSpan={3} >company</th>

          </tr>
          <tr>
            <th style={{ border: '1px solid black' }} rowSpan={2}>street</th>
            <th style={{ border: '1px solid black' }} rowSpan={2}>suit</th>
            <th style={{ border: '1px solid black' }} rowSpan={2}>city</th>
            <th style={{ border: '1px solid black' }} colSpan={2}>geo</th>
            <th style={{ border: '1px solid black' }} rowSpan={2}>bs</th>
            <th style={{ border: '1px solid black' }} rowSpan={2}>catchPhrase</th>
            <th style={{ border: '1px solid black' }} rowSpan={2}>name</th>

          </tr>
          <tr>
            <th style={{ border: '1px solid black' }}>lat</th>
            <th style={{ border: '1px solid black' }}>lng</th>
          </tr>
          {
            this.state.tableData.map((row, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid black' }}>{row.id}</td>
                <td style={{ border: '1px solid black' }}>{row.name}</td>
                <td style={{ border: '1px solid black' }}>{row.username}</td>
                <td style={{ border: '1px solid black' }}>{row.email}</td>
                <td style={{ border: '1px solid black' }}>{row.address.street}</td>
                <td style={{ border: '1px solid black' }}>{row.address.suite}</td>
                <td style={{ border: '1px solid black' }}>{row.address.city}</td>
                <td style={{ border: '1px solid black' }}>{row.address.geo.lat}</td>
                <td style={{ border: '1px solid black' }}>{row.address.geo.lng}</td>
                <td style={{ border: '1px solid black' }}>{row.phone}</td>
                <td style={{ border: '1px solid black' }}>{row.website}</td>
                <td style={{ border: '1px solid black' }}>{row.company.name}</td>
                <td style={{ border: '1px solid black' }}>{row.company.catchPhrase}</td>
                <td style={{ border: '1px solid black' }}>{row.company.bs}</td>

              </tr>

            ))
          }


        </table>
      </div>
    )
  }
}

