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
    }
};
