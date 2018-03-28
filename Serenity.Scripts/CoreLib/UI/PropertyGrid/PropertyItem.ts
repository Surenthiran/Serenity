﻿namespace Serenity {
    export type Constructor<T> = new (...args: any[]) => T;

    export interface PropertyItem {
        name?: string;
        title?: string;
        hint?: string;
        placeholder?: string;
        editorType?: string | React.ComponentType<any>;
        editorParams?: any;
        category?: string;
        collapsible?: boolean;
        collapsed?: boolean;
        tab?: string;
        cssClass?: string;
        headerCssClass?: string;
        formCssClass?: string;
        maxLength?: number;
        required?: boolean;
        insertable?: boolean;
        insertPermission?: string;
        hideOnInsert?: boolean;
        updatable?: boolean;
        updatePermission?: string;
        hideOnUpdate?: boolean;
        readOnly?: boolean;
        readPermission?: string;
        oneWay?: boolean;
        defaultValue?: any;
        localizable?: boolean;
        visible?: boolean;
        formatterType?: string;
        formatterParams?: any;
        displayFormat?: string;
        alignment?: string;
        width?: number;
        minWidth?: number;
        maxWidth?: number;
        labelWidth?: string;
        resizable?: boolean;
        sortable?: boolean;
        sortOrder?: number;
        editLink?: boolean;
        editLinkItemType?: string;
        editLinkIdField?: string;
        editLinkCssClass?: string;
        filteringType?: string;
        filteringParams?: any;
        filteringIdField?: string;
        notFilterable?: boolean;
        filterOnly?: boolean;
        quickFilter?: boolean;
        quickFilterParams?: any;
        quickFilterSeparator?: boolean;
        quickFilterCssClass?: string;
    }
}