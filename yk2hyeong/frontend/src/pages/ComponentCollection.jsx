import React, { useState } from 'react';  // useState 임포트
import Button from '../components/Button';
import Badge from '../components/Badge';
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Radio from '../components/Radio'
import Checkbox from '../components/Checkbox'
import TwoLevelSelect from '../components/TwoLevelSelect';
import CustomBreadcrumb  from '../components/CustomBreadcrumb';
import CustomPagination from '../components/CustomPagination';
import CustomTabs from '../components/CustomTabs';
import CustomDatePicker  from '../components/CustomDatePicker';
import CustomInputNumber from "../components/CustomInputNumber";
import CustomUpload from '../components/CustomUpload';
import CustomFloatButton from '../components/CustomFloatButton';
import CustomCard from '../components/CustomCard';
import CustomCarousel from '../components/CustomCarousel';
import CustomSelect from '../components/CustomSelect';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

/**
 * 공통 컴포넌트 미리보기 페이지
 * 다양한 색상과 크기 버튼 예시를 한 번에 볼 수 있도록 구성
 */

function ComponentCollection() {

    // 상태 변수 정의
    const [activeTab, setActiveTab] = useState('buttons');
    const [inputValue, setInputValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [checkedValues, setCheckedValues] = useState([]);
    const categoryData = {
        식량작물: ['쌀', '찹쌀', '혼합곡'],
        채소류: ['배추', '양배추', '시금치'],
        특용작물: ['참깨', '들깨', '땅콩'],
        과일류: ['사과', '배', '복숭아'],
    };



    // target 이벤트 핸들러
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // inputValue 상태를 업데이트
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value); // emailValue 상태를 업데이트
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value); // passwordValue 상태를 업데이트
    };

    const handleTextareaChange = (e) => {
        setText(e.target.value);
    };

    // TwoLevelSelect
    const handleSelectChange = (val) => {
        console.log('선택된 값:', val);
    };

    // 라디오
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };

    // 체크박스
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setCheckedValues((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    // 클릭 이벤트 핸들러
    const handleClick = (buttonType) => {
        alert(`${buttonType} `);
    };

    // 등록 버튼 클릭 시 확인 처리
    const handleRegister = () => {
        const confirmRegister = window.confirm('등록하시겠습니까?');
        if (confirmRegister) {
            alert('등록되었습니다.');
        } else {
            alert('등록이 취소되었습니다.');
        }
    };

    // 삭제 버튼 클릭 시 확인 처리
    const handleDelete = () => {
        const confirmDelete = window.confirm('삭제하시겠습니까?');
        if (confirmDelete) {
            alert('삭제되었습니다.');
        } else {
            alert('삭제가 취소되었습니다.');
        }
    };

    // 브레드크럼
    const separator = '>';
    const items  = [
        { title: 'Home' },
        { title: 'Application Center', href: '' },
        { title: 'Application List', href: '' },
        { title: 'An Application' },
    ];

    // 페이지네이션
    const [page, setPage] = useState(6);
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
        console.log('페이지 변경:', pageNumber);
    };

    // 탭
    const [activeKey, setActiveKey] = useState('1');

    const handleTabChange = (key) => {
        console.log('선택된 탭 키:', key);
        setActiveKey(key);
    };

    const tabItems = Array.from({ length: 4 }).map((_, i) => {
        const id = String(i + 1);
        return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
        };
    });

    // 날짜선택
    const [date, setDate] = useState(null);

    const handleDateChange = (dateObj, dateString) => {
        console.log('선택된 날짜:', dateObj, dateString);
        setDate(dateObj);
    };

    // 숫자 증감

    //업로드
    const handleFileChange = ({ file, fileList }) => {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    };

    const defaultFiles = [
        {
            uid: '1',
            name: 'xxx.png',
            status: 'uploading',
            url: 'http://www.baidu.com/xxx.png',
            percent: 33,
        },
        {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png',
        },
        {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500',
            url: 'http://www.baidu.com/zzz.png',
        },
    ];

    // 배너
    const handleSlideClick = (index, item) => {
        alert(`슬라이드 ${index + 1} 클릭! 내용: ${item}`);
    };

    // 사이드바
    const menuItems = [
        { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
        { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
        { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '11', label: 'Option 11' },
                        { key: '12', label: 'Option 12' },
                    ],
                },
            ],
        },
    ];

    return (
        <div style={{ padding: 20 }}>
            <h2>컴포넌트 미리보기</h2>

            {/* 탭 메뉴 */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={() => setActiveTab('buttons')} style={{ padding: '10px' }}>버튼</button>
                <button onClick={() => setActiveTab('badges')} style={{ padding: '10px' }}>뱃지</button>
                <button onClick={() => setActiveTab('inputs')} style={{ padding: '10px' }}>입력</button>
                <button onClick={() => setActiveTab('checkbox')} style={{ padding: '10px' }}>라디오,체크박스</button>
                <button onClick={() => setActiveTab('breadcrumb')} style={{ padding: '10px' }}>기타-1</button>
                <button onClick={() => setActiveTab('cards')} style={{ padding: '10px' }}>기타-2</button>
                <button onClick={() => setActiveTab('carousel')} style={{ padding: '10px' }}>배너</button>
                <button onClick={() => setActiveTab('sidebar')} style={{ padding: '10px' }}>사이드바</button>

            </div>

            {/* 버튼 */}
            {activeTab === 'buttons' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 버튼들을 수직 방향으로 배치 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {/* 기본 버튼 (기본값 color=primary, size=md) */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => handleClick('여기에')}>기본</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                    {`<Button onClick={() => handleClick('여기에')}>기본</Button>`}
                                </pre>
                        </div>

                        {/* 색상별 버튼 */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="primary" onClick={() => handleClick('alert')}>Primary</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="primary" onClick={() => handleClick('alert')}>Primary</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="secondary" onClick={() => handleClick('창에')}>Secondary</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="secondary" onClick={() => handleClick('창에')}>Secondary</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="accent" onClick={() => handleClick('띄우고')}>Accent</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="accent" onClick={() => handleClick('띄우고')}>Accent</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="info" onClick={() => handleClick('싶은')}>Info</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="info" onClick={() => handleClick('싶은')}>Info</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="success" onClick={() => handleClick('내용을')}>Success</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="success" onClick={() => handleClick('내용을')}>Success</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="warning" onClick={() => handleClick('입력하세요')}>Warning</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="warning" onClick={() => handleClick('입력하세요')}>Warning</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="error" onClick={() => handleClick('등록,삭제버튼은')}>Error</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="error" onClick={() => handleClick('등록,삭제버튼은')}>Error</Button>`}
                            </pre>
                        </div>

                        {/* 크기별 버튼 */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button size="sm" onClick={() => handleClick('있는그대로')}>Small</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button size="sm" onClick={() => handleClick('있는그대로')}>Small</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button size="md" onClick={() => handleClick('복사해서')}>Medium</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button size="md" onClick={() => handleClick('복사해서')}>Medium</Button>`}
                            </pre>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button size="lg" onClick={() => handleClick('쓰세요')}>Large</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button size="lg" onClick={() => handleClick('쓰세요')}>Large</Button>`}
                            </pre>
                        </div>

                        {/* 등록 버튼 (color="primary") */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="primary" onClick={handleRegister}>등록</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="primary" onClick={handleRegister}>등록</Button>`}
                            </pre>
                        </div>

                        {/* 삭제 버튼 (color="error") */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button color="error" onClick={handleDelete}>삭제</Button>
                            <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Button color="error" onClick={handleDelete}>삭제</Button>`}
                            </pre>
                        </div>
                    </div>
                </div>)
            }


            {/* 뱃지 */}
            {activeTab === 'badges' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 기본 뱃지 (기본값 color=primary, size=md) */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge>Primary Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge>Primary Badge</Badge>`}
                        </pre>
                    </div>

                    {/* 색상별 뱃지 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="primary">Primary Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="primary">Primary Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="secondary">Secondary Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="secondary">Secondary Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="accent">Accent Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="accent">Accent Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="info">Info Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="info">Info Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="success">Success Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="success">Success Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="warning">Warning Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="warning">Warning Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="error">Error Badge</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="error">Error Badge</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="accent">예약구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="accent">예약구매</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="info">예약구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="info">예약구매</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="success">예약구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="success">예약구매</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="accent">즉시구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="accent">즉시구매</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="info">즉시구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="info">즉시구매</Badge>`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Badge color="success">즉시구매</Badge>
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                            {`<Badge color="success">즉시구매</Badge>`}
                        </pre>
                    </div>
                </div>
            )}

            {/* input */}
            {activeTab === 'inputs' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 기본 Input */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input value={inputValue} onChange={handleInputChange} placeholder="텍스트 입력" />
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Input value={inputValue} onChange={handleInputChange} placeholder="텍스트 입력" />`}
            </pre>
                    </div>

                    {/* 이메일 Input */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input type="email" value={emailValue} onChange={handleEmailChange} placeholder="이메일 입력" />
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Input type="email" value={emailValue} onChange={handleEmailChange} placeholder="이메일 입력" />`}
            </pre>
                    </div>

                    {/* 비밀번호 Input */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input type="password" value={passwordValue} onChange={handlePasswordChange} placeholder="비밀번호 입력" />
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Input type="password" value={passwordValue} onChange={handlePasswordChange} placeholder="비밀번호 입력" />`}
                            </pre>
                    </div>

                    {/* textarea */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Textarea
                            value={text}
                            onChange={handleTextareaChange}
                            placeholder="여기에 내용을 입력하세요"
                            size="md"
                        />
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<Textarea value={text} onChange={handleTextareaChange} placeholder="여기에 내용을 입력하세요" size="md"/>`}
                            </pre>
                    </div>


                    {/* Select */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomSelect
                            names={['Apple', 'Banana', 'Cherry']}
                            allowClear
                            placeholder="과일을 선택하세요"
                        />

                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomSelect names={['Apple', 'Banana', 'Cherry']} 
allowClear placeholder="과일을 선택하세요"/>`}
                            </pre>
                    </div>


                    {/* TwoLevelSelect */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TwoLevelSelect categoryData={categoryData} size="md" onChange={handleSelectChange} />
                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                                {`<TwoLevelSelect categoryData={categoryData} size="md" onChange={handleSelectChange} />`}
                            </pre>

                    </div>
                </div>
            )}

            {/* 라디오, 체크박스 */}
            {activeTab === 'checkbox' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 기본(primary) 라디오 버튼 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Radio
                            value="option1"
                            checked={selectedValue === 'option1'}
                            onChange={handleRadioChange}
                            name="group1"
                            color="primary" // 색상은 color prop으로 지정
                        />


                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Radio value="option1" checked={selectedValue === 'option1'} onChange={handleRadioChange} name="group1" color="primary"/>`}
            </pre>
                    </div>

                    {/* 검정색(black) 라디오 버튼 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Radio
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={handleRadioChange}
                            name="group1"
                            color="black" // 검정색(black) 색상
                        />


                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Radio value="option2" checked={selectedValue === 'option2'} onChange={handleRadioChange} name="group1" color="black"/>`}
            </pre>
                    </div>

                    {/* 기본(primary) 체크박스 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            value="check1"
                            checked={checkedValues.includes('check1')}
                            onChange={handleCheckboxChange}
                            color="primary" // 색상은 color prop으로 지정
                        />

                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Checkbox value="check1" checked={checkedValues.includes('check1')} onChange={handleCheckboxChange} color="primary"/>`}
            </pre>
                    </div>

                    {/* 검정색(black) 체크박스 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            value="check2"
                            checked={checkedValues.includes('check2')}
                            onChange={handleCheckboxChange}
                            color="black" // 검정색(black) 색상
                        />

                        <pre style={{ marginLeft: 20, backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
                {`<Checkbox value="check2" checked={checkedValues.includes('check2')} onChange={handleCheckboxChange} color="black"/> `}
            </pre>
                    </div>
                </div>
            )}


            {/* 브레드크럼 */}
            {activeTab === 'breadcrumb' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 브레드크럼 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomBreadcrumb separator={separator} items={items} />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomBreadcrumb separator={separator} items={items} />`}
                            </pre>

                    </div>

                    {/* 페이지네이션 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomPagination
                            defaultCurrent={page}
                            total={100}
                            pageSize={10}
                            onChange={handlePageChange}
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomPagination defaultCurrent={page} total={100} pageSize={10} onChange={handlePageChange}/>`}
                            </pre>

                    </div>

                    {/* 탭 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomTabs items={tabItems} type="card" onChange={handleTabChange} />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomTabs items={tabItems} type="card" onChange={handleTabChange} />`}
                            </pre>

                    </div>

                    {/* 날짜선택 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomDatePicker
                            onChange={handleDateChange}
                            needConfirm={true}  // 필요하면 true로 설정
                            format="YYYY-MM-DD"
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomDatePicker onChange={handleDateChange} needConfirm={true} format="YYYY-MM-DD"/>`}
                            </pre>

                    </div>

                    {/* 숫자증감 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomInputNumber
                            defaultValue={100}
                            min={0}
                            max={200}
                            step={1}
                            onChange={(val) => console.log('값 변경:', val)}
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomInputNumber defaultValue={100} min={0} max={200} step={1} 
onChange={(val) => console.log('값 변경:', val)} />`}
                            </pre>
                    </div>

                    {/* 업로드 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomUpload
                            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            onChange={handleFileChange}
                            defaultFileList={defaultFiles}
                            buttonText="Upload Files"
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomUpload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" 
onChange={handleFileChange} 
defaultFileList={defaultFiles} 
buttonText="Upload Files"/>`}
                            </pre>
                    </div>

                    {/* 챗봇 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomFloatButton
                            icon={<span style={{ fontSize: '18px' }}>💬</span>}
                            tooltip="문의하기"
                            onClick={() => alert('챗봇 버튼 클릭')}
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomFloatButton icon={<span style={{ fontSize: '18px' }}>💬</span>} tooltip="문의하기" onClick={() => alert('챗봇 버튼 클릭')}/>`}
                            </pre>
                    </div>
                </div>
            )}

            {/* 카드 */}
            {activeTab === 'cards' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 수직카드 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomCard
                            title="Europe Street beat"
                            description="www.instagram.com"
                            image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            layout="column"
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomCard title="Europe Street beat"
description="www.instagram.com"
image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
layout="column"/>`}
                            </pre>
                    </div>

                    {/* 수평카드 */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CustomCard
                            title="Europe Street beat"
                            description="www.instagram.com"
                            image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            layout="row"
                        />
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomCard title="Europe Street beat" 
description="www.instagram.com"
image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
layout="row"/>`}
                            </pre>
                    </div>
                </div>
            )}


            {/* 배너 */}
            {activeTab === 'carousel' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* 배너 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '600px', maxWidth: '100%', margin: '0 auto' }}>
                            <CustomCarousel
                                items={['첫 번째', '두 번째', '세 번째']}
                                autoplay={true}
                                arrows={true}
                                pauseOnHover={true}
                                onClick={(index, item) => alert(`슬라이드 ${index + 1} 클릭! 내용: ${item}`)}
                            />
                        </div>
                        <pre style={{
                            marginLeft: 20,
                            backgroundColor: '#f4f4f4',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '14px',
                            whiteSpace: 'pre-wrap',  // 긴 줄이 줄바꿈되도록 설정
                            wordWrap: 'break-word',  // 단어 단위로 줄바꿈
                            overflowX: 'auto'  // 가로 스크롤 추가
                        }}>
                                {`<CustomCarousel items={['첫 번째', '두 번째', '세 번째']} autoplay={true} arrows={true} pauseOnHover={true} onClick={(index, item) => alert(\`슬라이드 \${index + 1} 클릭! 내용: \${item}\`)}/>`}
                            </pre>
                    </div>

                </div>
            )}


            {/* 사이드바 */}
            {activeTab === 'sidebar' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* 사이드바 닫기 옵션 없음 */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>사이드바 닫기 옵션 없음, 라이트테마</h3>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CustomSidebarMenu
                                items={menuItems}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                initialCollapsed={false}
                                theme="light"
                                showToggleButton={false}
                                onToggle={(collapsed) => console.log('Sidebar collapsed:', collapsed)}
                            />
                            <pre style={{
                                marginLeft: 20,
                                backgroundColor: '#f4f4f4',
                                padding: '10px',
                                borderRadius: '5px',
                                fontSize: '14px',
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word',
                                overflowX: 'auto'
                            }}>
            {`<CustomSidebarMenu
items={menuItems}
defaultSelectedKeys={['1']}
defaultOpenKeys={['sub1']}
initialCollapsed={false}
onToggle={(collapsed) => console.log('Sidebar collapsed:', collapsed)}/>`}
        </pre>
                        </div>
                    </div>

                    {/* 사이드바 닫기 옵션 있음 */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3>사이드바 닫기 옵션 있음, 다크테마</h3>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <CustomSidebarMenu
                                items={menuItems}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                theme="dark"
                                showToggleButton={true}
                                initialCollapsed={false}
                                onToggle={(collapsed) => console.log('Sidebar collapsed:', collapsed)}
                            />
                            <pre style={{
                                marginLeft: 20,
                                backgroundColor: '#f4f4f4',
                                padding: '10px',
                                borderRadius: '5px',
                                fontSize: '14px',
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word',
                                overflowX: 'auto'
                            }}>
            {`<CustomSidebarMenu
items={menuItems}
defaultSelectedKeys={['1']}
defaultOpenKeys={['sub1']}
theme="dark"
showToggleButton={true}
initialCollapsed={false}
onToggle={(collapsed) => console.log('Sidebar collapsed:', collapsed)}/>`}
        </pre>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
export default ComponentCollection;

