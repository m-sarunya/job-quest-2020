import React, { Fragment, useEffect, useState } from 'react';
import { Button } from './component'
import axios from 'axios'
import './App.css';
import { Input, Row, Col, Card, Empty, Spin } from 'antd';

const App = () => {
  const [search, setSearch] = useState({ firstName: '', lastName: '', count: '' })
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (() => {
      setLoading(true)
      axios.get('http://api.icndb.com/jokes/', {
        params: {
          firstName: search.firstName,
          lastName: search.lastName,
          count: search.count
        }
      }).then((res) => {
        setJokes(res.data.value)
      })
      setLoading(false)
    })()
  }, [])
  const onSearch = () => {
    setLoading(true)
    axios.get('https://api.icndb.com/jokes/', {
      params: {
        firstName: search.firstName,
        lastName: search.lastName
      }
    }).then((res) => {
      setJokes(res.data.value.slice(0, Number(search.count)))
    })
    setLoading(false)
  }

  const onRandom = () => {
    setLoading(true)
    axios.get(`http://api.icndb.com/jokes/random/${Number(search.count ? search.count : 1)}`).then((res) => {
      console.log(res.data.value)
      setJokes(res.data.value)
    })
    setLoading(false)
  }

  return (
    <div className="App">
      <Row align='middle' justify='center' className='headCard'>
        <h1 style={{ color: '#ffff', fontSize: '40px' }}>Chuck Norris</h1>
      </Row>
      <Card
        className='mainCard'
        cover={
          <Row gutter={16} align='middle' justify='center' className='headCard'>
            <Col>
              <Input placeholder="First Name" onChange={(ev) => { setSearch({ ...search, firstName: ev.target.value }) }} />
            </Col>
            <Col>
              <Input placeholder="Last Name" onChange={(ev) => { setSearch({ ...search, lastName: ev.target.value }) }} />
            </Col>
            <Col>
              <Input placeholder="Count" onChange={(ev) => { setSearch({ ...search, count: ev.target.value }) }} />
            </Col>
            <Col>
              <Button onClick={onSearch}>Search</Button>
            </Col>
            <Col>
              <Button onClick={onRandom}>Random</Button>
            </Col>
          </Row>
        }>
        <div className='bodyCard'>
          {jokes.length > 0 ? jokes.map((item, index) => (
            <Card title={"Joke: " + item.id} style={{ marginTop: 16 }} key={index}>
              <p>{item.joke}</p>
            </Card>
          )) :
            (<Fragment>
              {loading ? <Spin tip="Loading..."></Spin> :
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              }
            </Fragment>)}
        </div>
      </Card>
    </div>
  );
}

export default App;
