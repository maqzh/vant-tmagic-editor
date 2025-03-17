import { StyleSchema } from "@tmagic/core";
import { 
    ActionSheetProps, 
    BadgeProps, 
    ButtonProps, 
    CalendarProps, 
    CascaderProps, 
    CheckboxProps,
    CellProps, 
    CircleProps, 
    CollapseProps, 
    ColProps, 
    CountDownProps, 
    DialogProps, 
    DatePickerProps,
    DropdownItemProps,
    DropdownMenuProps, 
    FloatingBubbleProps, 
    FloatingPanelProps, 
    IconProps, 
    ImageProps, 
    OverlayProps, 
    PopupProps, 
    PickerProps,
    PullRefreshProps, 
    RateProps,
    RowProps, 
    SearchProps, 
    ShareSheetProps, 
    SignatureProps, 
    SliderProps, 
    SpaceProps, 
    StepperProps, 
    SwipeCellProps, 
    SwitchProps, 
    TimePickerProps, 
    UploaderProps,
    ActionBarProps,
    BackTopProps,
    DividerProps,
    EmptyProps,
    GridProps,
    HighlightProps,
    ImagePreviewProps,
    IndexBarProps,
    ListProps,
    NavBarProps,
    NoticeBarProps,
    PaginationProps,
    PopoverProps,
    ProgressProps,
    SidebarProps,
    SkeletonProps,
    StepsProps,
    StickyProps,
    SwipeProps,
    TabbarProps,
    TabProps,
    TagProps,
    TextEllipsisProps,
    TreeSelectProps,
    WatermarkProps,
    RadioProps,
    RadioGroupProps,
    FormProps,
    FieldRule,
    CheckboxGroupProps,
    FieldType,
    CellGroupProps,
} from "vant";

export interface FormState {
    initValues: FormValue;
    values: FormValue;
    changedValues: FormValue;
    setField: (id: string, field: any) => void;
    getField: (id: string) => any;
    deleteField: (id: string) => void;
    getFieldValue: (id: string) => any;
    setFieldValue: (id: string, value: any) => void;
    getFieldsValue: () => FormValue;
    setFieldsValue: (formValue: FormValue) => void;
    setChangeValue: (event: ChangeRecord) => void;
    getChangedValue: () => FormValue;
    validate: () => Promise<boolean>;
    isModified: () => boolean;
    onInitValue?: (mForm: FormState | undefined, {formValue, initValue}: {formValue: FormValue, initValue: FormValue}) => FormValue;
    reset: () => void;
    clear: () => void;
    [key: string]: any;
}
export interface FieldState {
    instance: any;
    getValue: () => any;
    setValue: (value: any) => void;
    getDisabled: () => boolean;
    setDisabled: (value: boolean) => void;
    getVisible: () => boolean;
    setVisible: (value: boolean) => void;
    getRequired: () => boolean;
    setRequired: (value: boolean) => void;
}
export interface ComponentProps<T> {
    id: string;
    name?: string;
    parentName?: string;
    isContainer?: boolean;
    type: string;
    props: T;
    className?: string;
    style?: any;
    items?: any[];
}
export interface ContainerProps<T> extends ComponentProps<T> {
    items: any[];
    model?: any;
}
export interface LazyloadProps {
    loading: string;
    error: string;
    preLoad: number;
    attempt: number;
    listenEvents: string[];
    adapter: object;
    filter: object;
    lazyComponent: boolean;
}
export type FormValue = Record<string | number, any>;
export interface ChangeRecord {
    propPath?: string;
    value: any;
}
export interface FormItemProps<T> extends ComponentProps<T> {
    model: any;
    initValues?: any;
    values?: any;
    label: string;
    name: string;
    valueType?: string,
    labelWidth?: number | string;
    labelAlign?: string;
    inputAlign?: string;
    disabled?: boolean;
    required?: boolean;
    colon?: boolean;
    rules?: any;
    events?: any;
    onChange?: (value: any) => void;
    setValue?: (value: any) => void;
    getValue?: () => any;
}
export interface FormItemRule extends FieldRule {
    
}
export interface FormConfig extends ComponentProps<FormProps> {
    config: FormItemProps<any>[] | FormItemProps<any>;
    onInitValue?: (mForm: FormState | undefined, {formValue, initValue}: {formValue: FormValue, initValue: FormValue}) => FormValue;
}
export interface FieldConfig {
    clsName?: string;
    style?: StyleSchema;
    label?: string;
    name?: string;
    value?: any;
    labelWidth?: number | string;
    labelAlign?: string;
    inputAlign?: string;
    disabled?: boolean;
    required?: boolean;
    rules?: FormItemRule[];
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    readonly?: boolean;
    clearable?: boolean;
    autofocus?: boolean;
    maxlength?: number;
    showWordLimit?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    clearTrigger?: string;
    formatTrigger?: string;
    autocomplete?: string;
    validateTrigger?: string;
    formatter?: (value: string) => string;
    parser?: (value: string) => string;
    validateStatus?: string;
    feedback?: string;
    extra?: string;
}
export interface ButtonConfig extends ComponentProps<ButtonProps> {

}
export interface CellGroupConfig extends ContainerProps<CellGroupProps> {}
export interface CellConfig extends ComponentProps<CellProps & {
    rightIcon?: string;
    extra?: string;
}> {
    
}
export interface IconConfig extends ComponentProps<IconProps> {
    
}
export interface ImageConfig extends ComponentProps<ImageProps> {

}
export interface RowConfig extends ComponentProps<RowProps> {
    
}
export interface ColConfig extends ComponentProps<ColProps> {

}
export interface PopupConfig extends ComponentProps<PopupProps> {

}
export interface SpaceConfig extends ComponentProps<SpaceProps> {

}
export interface CalendarConfig extends ComponentProps<CalendarProps> {

}
export interface CascaderConfig extends ComponentProps<CascaderProps> {

}
export interface CheckboxConfig extends ComponentProps<CheckboxProps> {

}
export interface DatePickerConfig extends ComponentProps<DatePickerProps> {

}
export interface PickerConfig extends ComponentProps<PickerProps> {

}
export interface RadioConfig extends ComponentProps<RadioProps> {

}
export interface RateConfig extends ComponentProps<RateProps> {

}
export interface SearchConfig extends ComponentProps<SearchProps> {

}
export interface SliderConfig extends ComponentProps<SliderProps> {

}
export interface SignatureConfig extends ComponentProps<SignatureProps> {

}
export interface StepperConfig extends ComponentProps<StepperProps> {

}
export interface SwitchConfig extends ComponentProps<SwitchProps> {

}
export interface TimePickerConfig extends ComponentProps<TimePickerProps> {

}
export interface UploaderConfig extends ComponentProps<UploaderProps> {

}
export interface ActionSheetConfig extends ComponentProps<ActionSheetProps> {

}
export interface DialogConfig extends ComponentProps<DialogProps> {

}
export interface DropdownMenuConfig extends ComponentProps<DropdownMenuProps> {

}
export interface DropdownItemConfig extends ComponentProps<DropdownItemProps> {

}
export interface FloatingPanelConfig extends ComponentProps<FloatingPanelProps> {

}
export interface FloatingBubbleConfig extends ComponentProps<FloatingBubbleProps> {

}
export interface OverlayConfig extends ComponentProps<OverlayProps> {

}
export interface PullRefreshConfig extends ComponentProps<PullRefreshProps> {

}
export interface ShareSheetConfig extends ComponentProps<ShareSheetProps> {

}
export interface SwipeCellConfig extends ComponentProps<SwipeCellProps> {

}
export interface BadgeConfig extends ComponentProps<BadgeProps> {

}
export interface CircleConfig extends ComponentProps<CircleProps> {

}
export interface CollapseConfig extends ComponentProps<CollapseProps> {

}
export interface CountDownConfig extends ComponentProps<CountDownProps> {

}
export interface DividerConfig extends ComponentProps<DividerProps> {

}
export interface EmptyConfig extends ComponentProps<EmptyProps> {

}
export interface HighlightConfig extends ComponentProps<HighlightProps> {

}
export interface ImagePreviewConfig extends ComponentProps<ImagePreviewProps> {

}
export interface LazyloadConfig extends ComponentProps<LazyloadProps> {

}
export interface ListConfig extends ComponentProps<ListProps> {

}
export interface NoticeBarConfig extends ComponentProps<NoticeBarProps> {

}
export interface PopoverConfig extends ComponentProps<PopoverProps> {

}
export interface ProgressConfig extends ComponentProps<ProgressProps> {

}
export interface SkeletonConfig extends ComponentProps<SkeletonProps> {

}
export interface StepsConfig extends ComponentProps<StepsProps> {

}
export interface StickyConfig extends ComponentProps<StickyProps> {

}
export interface SwipeConfig extends ComponentProps<SwipeProps> {

}
export interface TagConfig extends ComponentProps<TagProps> {

}
export interface TextEllipsisConfig extends ComponentProps<TextEllipsisProps> {

}
export interface WatermarkConfig extends ComponentProps<WatermarkProps> {

}
export interface ActionBarConfig extends ComponentProps<ActionBarProps> {

}
export interface BackTopConfig extends ComponentProps<BackTopProps> {

}
export interface GridConfig extends ComponentProps<GridProps> {

}
export interface IndexBarConfig extends ComponentProps<IndexBarProps> {

}
export interface NavBarConfig extends ComponentProps<NavBarProps> {

}
export interface PaginationConfig extends ComponentProps<PaginationProps> {

}
export interface SidebarConfig extends ComponentProps<SidebarProps> {

}
export interface TabConfig extends ComponentProps<TabProps> {

}
export interface TabbarConfig extends ComponentProps<TabbarProps> {

}
export interface TreeSelectConfig extends ComponentProps<TreeSelectProps> {

}
export interface RadioFieldConfig extends FormItemProps<RadioGroupProps> {
    options: {
        label: string;
        value: any;
    }[];
}
export interface CheckboxFieldConfig extends FormItemProps<CheckboxGroupProps> {
    options: {
        label: string;
        value: any;
    }[];
}
export interface InputFieldConfig extends FormItemProps<{
    type?: FieldType;
}> {
}
export interface CalendarFieldConfig extends FormItemProps<CalendarProps & {
    format?: string
}> {}
export interface DatePickerFieldConfig extends FormItemProps<DatePickerProps & {
    delimiter?: string
}> {}
export interface PickerFieldConfig extends FormItemProps<PickerProps> {}
export interface SwitchFieldConfig extends FormItemProps<SwitchProps> {}
export interface TimePickerFieldConfig extends FormItemProps<TimePickerProps & {
    delimiter?: string
}> {}