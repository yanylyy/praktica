$(document).ready(() => {
    const SCHEMA_LIGHT = 'light';
    const SCHEMA_DARK = 'dark';
    const pathCss = 'css';
    let currentSchema;

    const getSchema = () => localStorage.getItem('schema');
    const setSchema = (schema) => localStorage.setItem('schema', schema);

    const getFileSchema = () => `${currentSchema}-theme.css`;

    const loadCss = (file) => {
        if (file) {
            // Правильный селектор без #
            $("#theme-css").remove();
            $('<link>')
                .attr({
                    id: "theme-css",  // Без # !
                    rel: "stylesheet",
                    href: `${pathCss}/${file}?t=${Date.now()}`
                })
                .appendTo('head');
        }
    }

    $('.toggle').on('click', () => {
        currentSchema = currentSchema === SCHEMA_LIGHT ? SCHEMA_DARK : SCHEMA_LIGHT;
        setSchema(currentSchema);
        loadCss(getFileSchema());
    });

    // Инициализация
    currentSchema = getSchema();
    if (!currentSchema) {
        currentSchema = SCHEMA_LIGHT;
        setSchema(currentSchema);
    }
    loadCss(getFileSchema());
});