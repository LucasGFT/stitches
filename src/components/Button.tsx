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
                cursor: 'not-allowed'
            }
        },

        oneIcon: {
            true: {

            }
        },

        size: {
            md: {
                height: '48px',
                width: '213px',
                fontSize: '$1',
                padding: '$2 $3'
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
        color: 'white'
    },
})

interface ButtonProps {
    text: string,
    icon: ReactNode,
    oneIcon?: boolean,
    color?: 'black' | 'white',
    bgColor?: 'red' | 'white' | 'black',
    isDisabled?: boolean,
    size?: 'md' | 'sm' | 'lg',
    moreIcons?: ReactNode[]
}

export default function Button({ text, icon, bgColor, color, oneIcon, isDisabled, size, moreIcons }: ButtonProps) {
    return (
        <TagButton
            size={size}
            disabled={isDisabled}
            color={color}
            bgColor={bgColor}

        >
            {oneIcon ? (
                <span style={{ marginRight: '40px' }} />
            ) : icon}
            {moreIcons ? (
                <p style={{ display: 'flex', justifyContent: 'center' }}>{moreIcons[0]}{text}{moreIcons[1]}</p>
            ) : text}
            {icon}
        </TagButton>
    )
}
