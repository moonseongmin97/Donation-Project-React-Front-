import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TotAmt from '../Main/TotAmt';
import ApiCall from '../Common/ApiCall';
//커밋테스트
function DonateList() {
    const [members, setMembers] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0); // 이달의 총 기부 금액
    const [displayedAmount, setDisplayedAmount] = useState(0); // 애니메이션용 표시 금액
    const navigate = useNavigate();
    
    const handleSuccess = (data) => {
        if (data.success) {
            setMembers(data.result)
        };
    }

    // 페이지 로드 시 members 데이터와 총 기부 금액 가져오기
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                ApiCall({
                    url: '/api/findTop5Donors',
                    method: 'post',
                    payload : { },
                    onSuccess: handleSuccess,
                    //onError: handleError,
                });
            } catch (error) {
                console.log("데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchMembers();
    }, []);


    // 이름을 첫 글자만 별표로 마스킹하는 함수
    const maskName = (name) => {
    if (name.length <= 1) return name; // 길이가 1 이하라면 그대로 반환
    return `${name[0]}*${name.slice(2)}`; // 첫 글자 + '*' + 나머지 글자
};

    // 기부하기 버튼 클릭 시 기부 페이지로 이동
    const handleDonateClick = () => {
        navigate('/Donate'); // /donate 페이지로 이동
    };

    return (
        <div className="d-flex flex-column align-items-center bg-light min-vh-100 py-5">
            {/* 상단 기부하기 버튼 배너 */}
            <section className="w-100 bg-primary text-center py-3" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
                <Button
                    onClick={handleDonateClick}
                    variant="light"
                    className="fw-bold px-4 py-2"
                    style={{
                        fontSize: '1.2rem',
                        color: '#007bff',
                        backgroundColor: '#ffffff',
                        borderRadius: '30px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    💖 지금 기부하기
                </Button>
            </section>

            <main className="flex-shrink-0">
                {/* 총 기부 금액 표시 섹션 */}
                <TotAmt/>


                {/*
                <section className="py-4 text-center">
                    <h3 className="text-muted">이달의 총 기부 금액</h3>
                    <h1 className="display-4 fw-bold" style={{ color: "#28a745" }}>
                        ${displayedAmount.toLocaleString()}
                    </h1>
                </section>
                 */}
                
                <section className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            {/* 기부자 목록을 카드 형태로 표시 */}
            <ul className="list-group shadow-sm">
                {members.map((member, index) => (
                    <li
                        key={index}
                        className="list-group-item mb-4 p-4 d-flex align-items-center"
                        style={{
                            borderRadius: '12px',
                            backgroundColor: '#f9f9f9', // 밝은 중성 배경색
                            border: '1px solid #e0e0e0', // 은은한 테두리
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)', // 부드러운 그림자
                        }}
                    >
                        {/* 순위 표시 */}
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#d6d6d6', // 중성적인 회색
                                color: '#333333',
                                fontSize: '1.2rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                marginRight: '20px',
                            }}
                        >
                            {index + 1}
                        </div>

                        <div style={{ flexGrow: 1 }}>
                            {/* 이름 */}
                            <h5
                                className="mb-2"
                                style={{
                                    color: '#4a4a4a', // 짙은 회색
                                    fontWeight: 'bold',
                                }}
                            >
                                {maskName(member.userName)}
                            </h5>

                            {/* 기부 금액 */}
                            <p
                                className="mb-2"
                                style={{
                                    fontSize: '1.1rem',
                                    color: '#5cb85c', // 부드러운 초록색
                                    fontWeight: 'bold',
                                }}
                            >
                                {member.totalAmount.toLocaleString()}원
                            </p>

                            {/* 기부 날짜 */}
                            <footer className="blockquote-footer mt-2 text-muted">
                                <small>{new Date(member.createdAt).toLocaleString()}</small>
                            </footer>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</section>


            </main>
        </div>
    );
}

export default DonateList;
