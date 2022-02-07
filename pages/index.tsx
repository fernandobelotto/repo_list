import { Col, Input, Row, Typography } from 'antd';
import axios from 'axios';
import React from 'react';

const { Title, Paragraph } = Typography;
const { Search } = Input;

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Index() {


  // const { data, error } = useSWR('/users/{username}/repos', fetcher)

  const onSearch = () => { }

  return (
    <>
      <Title>Repository List</Title>
      <Paragraph> Insert your github user name and grap your public repos</Paragraph>
      <Row>
        <Col span={4}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Col>
      </Row>
      {/* <Row gutter={16}>

              {row.map((item) => {
                return (
                  <>
                    <Col span={4}>
                      <Card size="small" loading={!data}>
                        Card content
                      </Card>
                    </Col>
                  </>
                )
              })}

            </Row> */}

    </>
  )
}