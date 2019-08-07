import { TerraKeyValueInterface } from '@plentymarkets/terra-components';

export enum ComponentGroup
{
    Forms = 'Forms',
    Trees = 'Trees'
}

export interface ComponentDataInterface
{
    path:string;
    group:string;
}

const buttons:TerraKeyValueInterface<ComponentDataInterface> = {
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
    }
};

const editors:TerraKeyValueInterface<ComponentDataInterface> = {
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
    }
};

const layout:TerraKeyValueInterface<ComponentDataInterface> = {
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
    }
};

const tables:TerraKeyValueInterface<ComponentDataInterface> = {
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
    TerraPagerComponent: {
        path: 'pager/example/terra-pager.component.example',
        group: 'Tables'
    }
};

const trees:TerraKeyValueInterface<ComponentDataInterface> = {
    TerraCheckboxTreeComponent: {
        path: 'tree/checkbox-tree/example/terra-checkbox-tree.component.example',
        group: ComponentGroup.Trees
    },
    TerraNodeTreeComponent: {
        path: 'tree/node-tree/example/terra-node-tree.component.example',
        group: ComponentGroup.Trees
    }
};

const forms:TerraKeyValueInterface<ComponentDataInterface> = {
    TerraCheckboxComponent: {
        path: 'forms/checkbox/example/terra-checkbox.component.example',
        group: ComponentGroup.Forms
    },
    CheckboxGroupComponent: {
        path: 'forms/checkbox-group/example/checkbox-group.component.example',
        group: ComponentGroup.Forms
    },
    TerraFormComponent: {
        path: 'forms/form/example/terra-form.component.example',
        group: ComponentGroup.Forms
    },
    TerraColorPickerComponent: {
        path: 'forms/input/color-picker/example/terra-color-picker.component.example',
        group: ComponentGroup.Forms
    },
    TerraDatePickerComponent: {
        path: 'forms/input/date-picker/example/terra-date-picker.component.example',
        group: ComponentGroup.Forms
    },
    TerraDoubleInputComponent: {
        path: 'forms/input/double-input/example/terra-double-input.component.example',
        group: ComponentGroup.Forms
    },
    TerraInputComponent: {
        path: 'forms/input/example/terra-input.component.example',
        group: ComponentGroup.Forms
    },
    TerraFileInputComponent: {
        path: 'forms/input/file-input/example/terra-file-input.component.example',
        group: ComponentGroup.Forms
    },
    TerraNumberInputComponent: {
        path: 'forms/input/number-input/example/terra-number-input.component.example',
        group: ComponentGroup.Forms
    },
    RadioGroupComponent: {
        path: 'forms/input/radio/example/radio-group.component.example',
        group: ComponentGroup.Forms
    },
    TerraTextAreaInputComponent: {
        path: 'forms/input/text-area-input/example/terra-text-area-input.component.example',
        group: ComponentGroup.Forms
    },
    TerraTextInputComponent: {
        path: 'forms/input/text-input/example/terra-text-input.component.example',
        group: ComponentGroup.Forms
    },
    TerraTimePickerComponent: {
        path: 'forms/input/time-picker/example/terra-time-picker.component.example',
        group: ComponentGroup.Forms
    },
    TerraMultiCheckBoxComponent: {
        path: 'forms/multi-check-box/example/terra-multi-check-box.component.example',
        group: ComponentGroup.Forms
    },
    TerraRadioButtonComponent: {
        path: 'forms/radio-button/example/terra-radio-button.component.example',
        group: ComponentGroup.Forms
    },
    TerraSelectBoxComponent: {
        path: 'forms/select-box/example/terra-select-box.component.example',
        group: ComponentGroup.Forms
    },
    TerraSliderComponent: {
        path: 'forms/slider/example/terra-slider.component.example',
        group: ComponentGroup.Forms
    },
    TerraSuggestionBoxComponent: {
        path: 'forms/suggestion-box/example/terra-suggestion-box.component.example',
        group: ComponentGroup.Forms
    },
    TerraTagSelectComponent: {
        path: 'forms/tag-select/example/terra-tag-select.component.example',
        group: ComponentGroup.Forms
    }
};

export const componentMap:TerraKeyValueInterface<ComponentDataInterface> = {
    TerraAlertPanelComponent: {
        path: 'alert/example/terra-alert.component.example',
        group: 'Alert'
    },
    ...buttons,
    TerraNestedDataPickerComponent: {
        path: 'data-picker/nested-data-picker/example/terra-nested-data-picker.component.example',
        group: 'Data-Picker'
    },
    ...editors,
    TerraFileBrowserComponent: {
        path: 'file-browser/example/terra-file-browser.component.example',
        group: 'File-Browser'
    },
    FilterComponent: {
        path: 'filter/example/filter.component.example',
        group: 'Filter'
    },
    TerraFilterComponent: {
        path: 'filter/example/terra-filter.component.example',
        group: 'Filter'
    },
    ...forms,
    TerraInfoComponent: {
        path: 'info/example/terra-info.component.example',
        group: 'Info'
    },
    ...layout,
    TerraNoResultNoticeComponent: {
        path: 'no-result/example/terra-no-result-notice.component.example',
        group: 'No result'
    },
    TerraNoteComponent: {
        path: 'note/example/terra-note.component.example',
        group: 'Note',
    },
    TerraMultiSplitViewComponent: {
        path: 'split-view/multi/example/terra-multi-split-view.component.example',
        group: 'Split-View'
    },
    TerraStopwatchComponent: {
        path: 'stopwatch/example/terra-stopwatch.component.example',
        group: 'Stopwatch'
    },
    ...tables,
    TerraBaseToolbarComponent: {
        path: 'toolbar/base-toolbar/example/terra-base-toolbar.component.example',
        group: 'Toolbar'
    },
    ...trees
};
