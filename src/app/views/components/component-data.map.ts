import { TerraKeyValueInterface } from '@plentymarkets/terra-components';

export interface ComponentDataInterface
{
    path:string;
    group:string;
}

export const componentMap:TerraKeyValueInterface<ComponentDataInterface> = {
    TerraAlertPanelComponent: {
        path: 'alert/example/terra-alert.component.example',
        group: 'Alert'
    },
    TerraButtonComponent: {
        path: 'buttons/button/example/terra-button.component.example',
        group: 'Button'
    },
    TerraButtonWithOptionsComponent: {
        path: 'buttons/button-with-options/example/terra-button-with-options.component.example',
        group: 'Button'
    },
    TerraToggleComponent: {
        path: 'buttons/toggle/example/terra-toggle.component.example',
        group: 'Button'
    },
    TerraNestedDataPickerComponent: {
        path: 'data-picker/nested-data-picker/example/terra-nested-data-picker.component.example',
        group: 'Data-Picker'
    },
    TerraCodeEditorComponent: {
        path: 'editors/code-editor/example/terra-code-editor.component.example',
        group: 'Editors'
    },
    TerraNoteEditorComponent: {
        path: 'editors/note-editor/example/terra-node-editor.component.example',
        group: 'Editors'
    },
    TerraSyntaxEditorComponent: {
        path: 'editors/syntax-editor/example/terra-syntax-editor.component.example',
        group: 'Editors'
    },
    FilterComponent: {
        path: 'filter/example/filter.component.example',
        group: 'Filter'
    },
    TerraFilterComponent: {
        path: 'filter/example/terra-filter.component.example',
        group: 'Filter'
    },
    // TODO: add forms here
    TerraInfoComponent: {
        path: 'info/example/terra-info.component.example',
        group: 'Info'
    },
    TerraCardComponent: {
        path: 'layouts/card/example/terra-card.component.example',
        group: 'Layout'
    },
    TerraTwoColumnsContainerComponent: {
        path: 'layouts/column-container/two-columns/example/terra-two-column-container.component.example',
        group: 'Layout'
    },
    TerraThreeColumnsContainerComponent: {
        path: 'layouts/column-container/three-columns/example/terra-three-column-container.component.example',
        group: 'Layout'
    },
    TerraInfoBoxComponent: {
        path: 'layouts/info-box/example/terra-info-box.component.example',
        group: 'Layout'
    },
    TerraOverlayComponent: {
        path: 'layouts/overlay/example/terra-overlay.component.example',
        group: 'Layout'
    },
    TerraPortletComponent: {
        path: 'layouts/portlet/example/terra-portlet.component.example',
        group: 'Layout'
    },
    TerraTagComponent: {
        path: 'layouts/tag/example/terra-tag.component.example',
        group: 'Layout'
    },
    TerraTaglistComponent: {
        path: 'layouts/taglist/example/terra-taglist.component.example',
        group: 'Layout'
    },
    TerraNoResultsNoticeComponent: {
        path: 'no-result/example/terra-no-result-notice.component.example',
        group: 'No result'
    },
    TerraNoteComponent: {
        path: 'note/example/terra-note.component.example',
        group: 'Note',
    },
    TerraPagerComponent: {
        path: 'pager/example/terra-pager.component.example',
        group: 'Tables'
    },
    TerraMultiSplitViewComponent: {
        path: 'split-view/multi/example/terra-multi-split-view.component.example',
        group: 'Split-View'
    },
    TerraStopwatchComponent: {
        path: 'stopwatch/example/terra-stopwatch.component.example',
        group: 'Stopwatch'
    },
    TerraDataTableComponent: {
        path: 'tables/data-table/example/terra-data-table.component.example', // TODO: Maybe load all the files in the example folder!?
        group: 'Tables'
    },
    TerraDataTableContextMenuComponent: {
        path: 'tables/data-table/context-menu/example/terra-data-table-context-menu.component.example',
        group: 'Tables'
    },
    TerraGroupFunctionComponent: {
        path: 'tables/group-function/example/terra-group-function.component.example',
        group: 'Tables'
    },
    TerraSimpleTableComponent: {
        path: 'tables/simple/example/terra-simple-table.component.example',
        group: 'Tables'
    },
    TerraBaseToolbarComponent: {
        path: 'toolbar/base-toolbar/example/terra-base-toolbar.component.example',
        group: 'Toolbar'
    },
    CheckboxGroupComponent: {
        path: 'forms/checkbox-group/example/checkbox-group.component.example',
        group: 'Forms'
    },
    RadioGroupComponent: {
        path: 'forms/input/radio/example/radio-group.component.example',
        group: 'Forms'
    },
    TerraCheckboxComponent: {
        path: 'forms/checkbox/example/terra-checkbox.component.example',
        group: 'Forms'
    },
    TerraColorPickerComponent: {
        path: 'forms/input/color-picker/example/terra-color-picker.component.example',
        group: 'Forms'
    },
    TerraDatePickerComponent: {
        path: 'forms/input/date-picker/example/terra-date-picker.component.example',
        group: 'Forms'
    },
    TerraDoubleInputComponent: {
        path: 'forms/input/double-input/example/terra-double-input.component.example',
        group: 'Forms'
    }
};
