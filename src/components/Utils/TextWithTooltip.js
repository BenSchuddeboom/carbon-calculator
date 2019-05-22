import React from 'react'
import { Tooltip, Icon } from 'antd'
import { labels } from '../Utils/TooltipMessages'

export default function TextWithTooltip(props) {
    const input = labels[props.topic]

    switch (props.position) {
        case 'right':
            return (
                <div className="label">
                    <b>{input.text}</b>
                    <Tooltip placement="rightTop" title={input.message}>
                        <Icon type="info-circle" />
                    </Tooltip>
                </div>
            )

        case 'left':
            return (
                <div className="label">
                    <Tooltip placement="rightTop" title={input.message}>
                        <Icon type="info-circle" />
                    </Tooltip>
                    <b>{input.text}</b>
                </div>
            )

        default:
            console.error('Wrong position given.')

    }
}
