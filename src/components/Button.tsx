import { styled } from '@stitches/react'
import { ReactNode } from 'react'

interface TagButtonProps {
    color?: 'red' | 'black' | 'white',
    disabled?: boolean,
    tertiary?: boolean,
    size: 'big' | 'medium' | 'small',
    text: string,
    icon: ReactNode,
    icon2?: ReactNode,
    icon3?: ReactNode,
}

const TagButton = styled('button', {
    borderRadius: '8px',
    fontWeight: 500,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    color: '#FFF',
    cursor: 'pointer',

    variants: {
        color: {
            red: {
                backgroundColor: '#DD3F57',
                color: '#FFF'
            },
            black: {
                backgroundColor: '#1C1B1B',
                color: '#FFF'
            },
            white: {
                backgroundColor: '#FFF',
                color: '#1C1B1B',
                border: '1px solid #000'
            }
        },
        disabled: {
            true: {
                backgroundColor: '#AFAFAF',
                cursor: 'not-allowed'
            }
        },
        tertiary: {
            true: {
                backgroundColor: '#FFF',
                justifyContent: 'flex-end',
                color: '#212121',
                border: '1px solid black',
                '& svg': {
                    marginLeft: 100
                }
            }
        },
        size: {
            big: {
                width: '327px',
                height: '56px',
                fontSize: '18px'
            },
            medium: {
                width: '213px',
                height: '48px',
                fontSize: '16px'
            },
            small: {
                width: '148px',
                height: '48px',
                fontSize: '16px'
            }
        }
    }
})

const TextButton = styled('p', {
    display: 'flex',
    alignItems: 'center',
})


export default function Button({ disabled, tertiary, color, size, text, icon, icon2, icon3 }: TagButtonProps) {
    return (
        <TagButton
            disabled={disabled}
            tertiary={tertiary}
            color={color}
            size={size}
        >
            {!tertiary && icon}
            <TextButton>
                {icon2}
                {text}
                {icon3}
            </TextButton>
            {icon}
        </TagButton>
    )
}
