import { IProfileInfo } from '../../types/profile';
import { SidebarAction, SidebarActionType } from '../../types/sidebar';

const initialState: IProfileInfo[] = [
    { id: 1, avatar: '', name: 'Степанова Евгения', title: 'Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.' },
    { id: 2, avatar: '', name: 'Ермолаева Вероника', title: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.' },
    { id: 3, avatar: '', name: 'Шилов Анатолий', title: 'С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.' },
    { id: 4, avatar: '', name: 'Смирнова Алиса', title: 'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.' },
    { id: 5, avatar: '', name: 'Николаев Александр', title: 'Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.' },
    { id: 6, avatar: '', name: 'Токарева Ева', title: 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.' },
    { id: 7, avatar: '', name: 'Ковалев Павел', title: 'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.' },
    { id: 8, avatar: '', name: 'Кириллов Даниил', title: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.' },
    { id: 9, avatar: '', name: 'Кузнецова Алёна', title: 'Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.' },
    { id: 10, avatar: '', name: 'Котов Дмитрий', title: 'Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу.' },
    { id: 11, avatar: '', name: 'Кузнецов Данила', title: 'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.' },
    { id: 12, avatar: '', name: 'Парамонова София', title: 'Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.' },
    { id: 13, avatar: '', name: 'Попов Борис', title: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.' },
    { id: 14, avatar: '', name: 'Горюнов Даниил', title: 'Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.' },
    { id: 15, avatar: '', name: 'Громов Платон', title: 'Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.' },
];

export const sidebar = (state = initialState, action: SidebarAction) => {
    switch (action.type) {
        case SidebarActionType.SEARCH_DIALOG:
            if (!action.payload) {
                return initialState;
            }
            const newState = state.filter((user) =>
                user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return newState;
        default:
            return state;
    }
};
