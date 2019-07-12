import { TerraKeyValueInterface } from '@plentymarkets/terra-components';

export const componentMap:TerraKeyValueInterface<{path:string, group:string}> = {
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
    }
};
