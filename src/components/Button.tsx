import { createStitches } from '@stitches/react'
import { ReactNode } from 'react'

const { styled } = createStitches({
    theme: {
        colors: {
            bgRed: '#DD3F57',
            bgBlack: '#1C1B1B',
            bgDisabled: '#AFAFAF',
            borderBlack: '#212121',
        },
        space: {
            1: '10px',
            2: '12px',
            3: '16px',
        },
        fontSizes: {
            1: '16px',
            2: '18px',
        },
    },
})

const TagButton = styled('button', {

    borderRadius: '8px',
    border: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& span': {
        width: '24px',
        display: 'flex',
    },

    variants: {
        color: {
            black: {
                color: '#000'
            },
            white: {
                color: '#FFF'
            }
        },

        bgColor: {
            red: {
                backgroundColor: '$bgRed',
            },
            black: {
                backgroundColor: '$bgBlack',
                color: '#FFF'
            },
            white: {
                backgroundColor: '#FFFFFF',
                border: '1px solid $borderBlack',
                color: '$borderBlack'
            }
        },

        disabled: {
            true: {
                backgroundColor: '$bgDisabled',
                cursor: 'not-allowed',
                color: '#FFF'
            }
        },

        size: {
            md: {
                height: '48px',
                width: '213px',
                fontSize: '$1',
                padding: '$2 $3',
            },
            sm: {
                height: '48px',
                width: '148px',
                fontSize: '$1',
                padding: '$1'
            },
            lg: {
                width: '327px',
                height: '56px',
                fontSize: '$2',
                padding: '$3 $1',

                '& svg': {
                    margin: '0 6px'
                },

                '& span': {
                    width: '40px'
                }
            }
        }
    },

    // compoundVariants so aplica o css quando as variaveis forem correspondente
    // compoundVariants: [{
    //   color: 'blue',
    //   size: 'lg',
    //   css: {
    //     backgroundColor: 'Purple'
    //   }
    // }],

    // defaultVariants define um valor padrao
    defaultVariants: {
        bgColor: 'red',
        size: 'lg',
        color: 'white',
    },
})

interface ButtonProps {
    text: string,
    iconLeft?: ReactNode,
    iconRight?: ReactNode,
    color?: 'black' | 'white',
    bgColor?: 'red' | 'white' | 'black',
    isDisabled?: boolean,
    size?: 'md' | 'sm' | 'lg',
}

export default function Button({ text, iconLeft, iconRight, bgColor, color, isDisabled, size }: ButtonProps) {
    return (
        <TagButton
            size={size}
            disabled={isDisabled}
            color={color}
            bgColor={bgColor}
        >
            <span>{iconLeft}</span>
            <p>{text}</p>
            <span>{iconRight}</span>
        </TagButton>
    )
}