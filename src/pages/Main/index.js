import React, { Children, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import subjects from '../../data/subjectItems.json';
import essay from '../../data/essay.json';
import { createRoutesFromChildren } from 'react-router-dom';

//顶部导航栏的内容
const items = [
    subjects.math,
    subjects.electric,
    subjects.computer,
    subjects.program,
    subjects.ai,
];

const { Content, Footer, Sider } = Layout;
let reader = new FileReader();
const title = essay.title;
const textContent = essay.content;

const App = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [current, setCurrent] = useState(['caculus1', 'math']);
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.keyPath);
    };

    //设置侧边栏随顶部导航栏变化
    //const itemText = JSON.stringify(items[0])
    const sujectm = items.find((items) => (items.key === current[1]), items);
    const items2 = sujectm.children.map((subject, index) => {
        return {
            key: subject.key,
            label: subject.label,
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });

    return <div style={{
        width: "1060px",
        margin: "0 auto",
        background: "#f5f5f5",
    }}>
        <Menu style={{
            background: "#f5f5f5",
        }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Menu />
        <Content
            style={{
                padding: '0 48px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
                items={[{ title: "Home" }, { title: [current[1]] }]}>
            </Breadcrumb>

            <Layout
                style={{
                    padding: '24px 0',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Sider
                    style={{
                        background: colorBgContainer,
                    }}
                    width={200}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                        }}
                        items={items2}
                    />
                </Sider>
                <Content
                    style={{
                        padding: '0 24px',
                        minHeight: 666,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©{new Date().getFullYear()} Created by weimang
        </Footer>
    </div>;
};
export default App;