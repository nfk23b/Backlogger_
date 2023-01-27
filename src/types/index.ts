export type FullWidthContainerProps = {
    children: React.ReactNode
}

export type LayoutProps = {
    children: React.ReactNode
}

export type CardItemType = {
    children: React.ReactNode;
    slug: string;
    name: string;
}

export enum TypographyType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    SPAN = 'span',
    PARAGRAPH = 'p'
}

export enum TypographyMargin {
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'l',
    EXTRALARGE = 'xl',
}

export enum TypographyAlignment {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}
