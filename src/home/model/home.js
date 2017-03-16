'use strict';
/**
 * model
 */
export default class extends think.model.base {

    // ������û�
    addUser(data){
        return this.model('user').add(data);
    }
    //�����û���Ϣ
    saveUserInfo(data,where){
        return this.model('user').where(where).update(data);
    }

    //�����û�
    findUser(where){
        return this.model('user').where(where).select();
    }

    //����ȫ���б�
    findAll(db,where){
        return this.model(db).where(where).select();
    }
    //�����ض���¼
    findOne(db,where){
        return this.model(db).where(where).find();
    }
    //��������
    updateRecord(db,where,data){
        return this.model(db).where(where).update(data);
    }
    //�������
    addRecord(db,data){
        return this.model(db).add(data);
    }
    //���������б�
    getArticleList(where){
        return this.model("article").where(where).order("createtime DESC").limit(5).select();
    }
    //���ص�������б�
    getPopularList(where){
        return this.model("article").where(where).order("view DESC").limit(5).select();
    }
    //���ص�������б�
    addViewCount(where){
        return this.model("article").where(where).increment('view',1);
    }
    //��ҳ��ʼ����
    getPageSelect(where,page,pagesize){
        return this.model("article").where(where).order("createtime DESC").page(page,pagesize).select();
    }
    //��ҳthinkjs��ҳ����
    getPageCountSelect(where,page,pagesize){
        return this.model("article").where(where).order("createtime DESC").page(page,pagesize).countSelect();
    }

}
