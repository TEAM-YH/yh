import React, {useEffect, useState} from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    InfoCircleOutlined,
    WarningOutlined,
} from '@ant-design/icons';
import Button from './Button';

const iconMap = {
    info: InfoCircleOutlined,
    warning: WarningOutlined,
    error: CloseCircleOutlined,
    success: CheckCircleOutlined,
};

const colorMap = {
    info: '#1890ff',      // info 파란색
    success: '#52c41a',   // success 초록색
    warning: '#faad14',   // warning 주황색
    error: '#ff4d4f',     // error 빨간색
};

const iconColorMap = {
    info: '#1890ff',      // info 파란색
    warning: '#faad14',   // warning 주황색
    error: '#ff4d4f',     // error 빨간색
    success: '#52c41a',   // success 초록색
};

const CustomModal = ({
                         type = 'info',
                         title,
                         content,
                         onOk,
                         onCancel,
                         buttonLabel,
                         buttonColor = null,
                         buttonSize = 'md',
                         successMessage,
                         cancelMessage,
                         showOk,
                         showCancel,
                         useInputMode = false, //admin 페이지 input요소 전용
                         showOnMount = false,
                     }) => {
    const [modal, contextHolder] = Modal.useModal();
    //admin 페이지 input요소 적용
    const [isOpen, setIsOpen] = useState(false);

    const resolvedButtonColor = buttonColor || type;

    useEffect(()=>{
        if (showOnMount) {
            showModal();
        }
    }, [showOnMount]);

    // 외부 버튼 색상 스타일 (무조건 colorMap 색상과 맞춤)
    const externalButtonStyle = {
        backgroundColor: colorMap[resolvedButtonColor] || colorMap.info,
        borderColor: colorMap[resolvedButtonColor] || colorMap.info,
        color: 'white',
    };

    // 모달 내부 확인 버튼 진한 회색 고정 스타일
        const modalOkButtonStyle = {
            backgroundColor: '#444444',
            borderColor: '#444444',
            color: 'white',
        };


    const showModal = () => {

        if(useInputMode){
            setIsOpen(true);
            return;
        }
        const IconComponent = iconMap[type] || InfoCircleOutlined;
        const iconColor = iconColorMap[type] || colorMap.info;
        const iconElement = <IconComponent style={{ color: iconColor }} />;


        // 기본 버튼 노출 여부 결정
        const defaultShowOk = showOk !== undefined ? showOk : true;
        const defaultShowCancel =
            showCancel !== undefined
                ? showCancel
                : type === 'warning' || type === 'error'
                    ? true
                    : false;

        const config = {
            title,
            content,
            icon: iconElement,
            okText: defaultShowOk ? '확인' : undefined,
            cancelText: defaultShowCancel ? '취소' : undefined,
            okButtonProps: defaultShowOk ? { style: modalOkButtonStyle } : undefined,
            onOk: () => {
                if (onOk) onOk();
                if (successMessage) {
                    modal.success({
                        title: '완료',
                        content: successMessage,
                        icon: <CheckCircleOutlined style={{ color: colorMap.success }} />,
                        okText: '확인',
                        okButtonProps: { style: modalOkButtonStyle },
                    });
                }
            },
            onCancel: () => {
                if (onCancel) onCancel();
                if (cancelMessage) {
                    modal.info({
                        title: '취소됨',
                        content: cancelMessage,
                        icon: <InfoCircleOutlined style={{ color: colorMap.info }} />,
                        okText: '확인',
                        okButtonProps: { style: modalOkButtonStyle },
                    });
                }
            },
        };

        if (defaultShowCancel) {
            modal.confirm(config);
        } else {
            switch (type) {
                case 'info':
                    modal.info(config);
                    break;
                case 'success':
                    modal.success(config);
                    break;
                case 'warning':
                    modal.warning(config);
                    break;
                case 'error':
                    modal.error(config);
                    break;
                default:
                    modal.info(config);
            }
        }
    };

    return (
        <>
            {/* showOnMount가 아닐 때만 버튼 출력 */}
            {!showOnMount && (
                <Button
                    style={externalButtonStyle}
                    size={buttonSize}
                    onClick={showModal}
                >
                    {buttonLabel || type}
                </Button>
            )}

            {/*useInputMode가 true일 때 별도 모달(input 요소 추가*/}
            {useInputMode && (
                <Modal
                    open={isOpen}
                    title={title}
                    onOk={()=> {
                        onOk?.();
                        setIsOpen(false);
                    }}
                    onCancel={()=>{
                        onCancel?.();
                        setIsOpen(false);
                    }}
                    okText="확인"
                    cancelText="취소"
                    okButtonProps={{style: modalOkButtonStyle}}
                >
                    {content}
                </Modal>
            )}
            {contextHolder}
        </>
    );
};

CustomModal.propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    buttonLabel: PropTypes.string,
    buttonColor: PropTypes.oneOf([
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error',
    ]),
    buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
    successMessage: PropTypes.string,
    cancelMessage: PropTypes.string,
    showOk: PropTypes.bool,
    showCancel: PropTypes.bool,
};

export default CustomModal;
