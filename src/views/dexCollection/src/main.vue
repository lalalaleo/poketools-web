<template>
  <div id="dex-collection">
        <el-table 
            :data="pokemons"
            :row-style="{ 'backgroundColor': 'rgba(233,0,0,0)'}"
        >
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                label="拥有"
                width="60">
                <template slot-scope>
                    <el-checkbox />
                </template>
            </el-table-column>
            <el-table-column
                prop="national_id"
                label="编号"
                width="60">
            </el-table-column>
            <el-table-column
                label="图标"
                width="80">
                <template slot-scope="scope">
                    <!-- <img :src="`https://s.pokeuniv.com/pokemon/icon/${scope.row.national_id.slice(1,4)-0}${(scope.row.id==0)?'':'.'+scope.row.id}.png`" class="pokemon-icon"> -->
                    <img :src="`/icon/${scope.row.national_id.slice(1,4)-0}${(scope.row.id==0)?'':'.'+scope.row.id}.png`" class="pokemon-icon">
                </template>
            </el-table-column>
            <el-table-column
                prop="name_chs"
                label="宝可梦"
                width="180">
            </el-table-column>
            <el-table-column
                label="梦特"
                width="60">
                <template slot-scope>
                    <el-checkbox />
                </template>
            </el-table-column>
            <el-table-column
                label="异色"
                width="60">
                <template slot-scope>
                    <el-checkbox />
                </template>
            </el-table-column>
            <el-table-column
                label="精灵球"
                width="300">
                <template slot-scope>
                    <div class="pokeball-checkbox-group">
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/492.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox pokeball-checkbox-unselected"><img src="https://s.pokeuniv.com/item/493.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/494.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/495.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox pokeball-checkbox-unselected"><img src="https://s.pokeuniv.com/item/496.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/497.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/498.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox pokeball-checkbox-unselected"><img src="https://s.pokeuniv.com/item/576.png" class="pokeball-icon"></div>
                        <div class="pokeball-checkbox"><img src="https://s.pokeuniv.com/item/851.png" class="pokeball-icon"></div>
                    </div>
                    <!-- <el-checkbox-group size="mini">
                    </el-checkbox-group> -->
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
    name: "dexCollection",
    data(){
        return {
        }
    },
    computed: {
        pokemons() {
            const arr = [...this.$store.getters.pokemons_sort_byid];
            arr.map((item, index) => {
                if((index > 0) && (arr[index].national_id == arr[index - 1].national_id)) {
                    let num = arr[index - 1].id;
                    arr[index].id = num + 1;    
                } else {
                    arr[index].id = 0;
                }
            });
            return arr;
        },
    },
    created() {

    },
    methods: {
    },
}
</script>

<style lang="less">
    #dex-collection {
        width: 1000px;
        height: calc(~'100% - 60px');
        background-color: rgba(255, 255, 255, 0.7);
        margin: 30px auto;
        padding: 20px;
        border-radius: 25px;
        overflow: hidden;
        .pokemon-icon {
            // width: 32px;
            height: 32px;
        }
        .pokeball-checkbox-group {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .pokeball-checkbox {
                cursor: pointer;
                width: 32px;
                height: 32px;
                .pokeball-icon {
                    width: 32px;
                    height: 32px;
                }
                &.pokeball-checkbox-unselected {
                    opacity: 0.2;
                }
            }
        }
    }
    .el-table{
        background-color: rgba(0,0,0,0);
        height: 100%;
    }
    .el-table th, .el-table tr,.el-table td{
        border: 0;
        // border-color: rgba(0,0,0,0.2);
        background-color: transparent;
    }
    /* 使表格背景透明 */
    .el-table th, .el-table tr {
        background-color: transparent;
    }
    /* 删除表格下横线 */
    .el-table::before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
    }
    .el-table thead {
        font-weight: 500;
    }
    .el-table__body-wrapper {
        overflow-y: auto !important;
        height: calc(~"100% - 48px") !important;
    }
    ::-webkit-scrollbar {
        width: 7px; /*滚动条宽度*/
        height: 7px; /*滚动条高度*/
        background-color: rgba(0,0,0,0);
    }
    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: rgba(221, 222, 224); /*滚动条的背景颜色*/
        border-radius: 5px;
    }
</style>