<template>
    <div id="app" class="h-100 w-100">
        <transition name="fade" mode="out-in">
            <div>
            <!-- Introduction section. -->
            <div class="h-100 w-100 d-flex justify-content-center align-items-center" key="1" v-if="introMode === true">
                
                <div class="row col-12 d-flex justify-content-center" v-if="this.element">
                    <div class="container col-8 width-100">
                        
                        <div class="row col-12 border d-flex align-items-center flex-column h-100">
                            <div class="h2 p-4" style="text-align:center">
                                Introduction and Examples
                            </div>
                            
                            <div>
                                <div class="h4">
                                    Data
                                </div>
                                In this form we are going to provide you with public claims (mainly from the political sector) which have been classified as <b>False Statements</b>.
                                <br>For each one we will also provide you with a justification, provided by the journalist who has classified the statement, explaining why it is considered to be False. 
                                
                                <div class="h4" style="margin-top: 30px; margin-bottom: 20px;">
                                    Objective
                                </div>
                                What we want from you is to read the provided claim and justification and then classify them into <b>one</b> of three given classes, so that the <b>reason</b> for which the claim is considered to be false, is described best. 
                                
                                <div class="h4" style="margin-top: 30px; margin-bottom: 20px;">
                                    Classes
                                </div>
                                The classes are the following:
                                <br><br>- Distortion
                                <br><br>- Emphasis
                                <br><br>- Unfounded

                                <br><br>Later on we describe the classes in detail and we provide you with some useful examples.

                                <div class="h4" style="margin-top: 30px; margin-bottom: 20px;">
                                    Note!
                                </div>

                                Please note that no special knowledge of the background of the claims is needed, as we only need you to classify according to your own intuition. For this reason please try to avoid overthinking what is being stated, as well as your personal opinions about it. 

                                In case that you are uncertain or are unable to classify a statement for some other reason, then please chose the <b>Unclear</b> option.

                                <div class="h4" style="margin-top: 30px; margin-bottom: 20px;">
                                    Examples
                                </div>
                                
                                Following are the explanations of the classes and some examples for each one.

                                <div class="h6" style="margin-top: 30px; margin-bottom: 15px;">
                                ---------- Distortion ----------
                                </div>
                                We consider a claim Distorted when the truth has been deliberately changed.
                                
                                <br><br>e.g. 1

                                <br><br>-Claim:
                                    <br>George Washington said a free people should be armed to guard against government tyranny.

                                <br><br>-Justification:  
                                    <br>"George Washington said a free people should be an armed people," seemingly tracks Washingtons words to the nation: "A free people ought not only to be armed, but disciplined. "Contrary to Gohmerts characterization, though, Washington was not speaking about citizens arming themselves in case of government tyranny. Quite the opposite: The president and former general was calling for disciplined troops to fight on behalf of the government.

                                <br><br>e.g. 2

                                <br><br>-Claim:
                                    <br>Vice President Joe Biden "admits that the American people are being scammed" with the economic stimulus package.

                                <br><br>-Justification:  
                                    <br>Boehner may be technically correct that Biden mentioned people being scammed in the roundtable meeting. But Boehner incorrectly suggests the vice president called the stimulus a scam and he fails to note that Biden promised "to expose abuses whenever they were detected," as the AP reported.


                                <div class="h6" style="margin-top: 30px; margin-bottom: 15px;">
                                ---------- Emphasis ----------
                                </div>
                                The Emphasis class should contain claims that select and emphasize on a single fact from a complex truth.

                                <br><br>e.g. 1

                                <br><br>-Claim:
                                    <br>President Obama once said he wants everybody in America to go to college.

                                <br><br>-Justification:
                                    <br>We found 18 statements from Obama about people attending college. In the vast majority of the 18, Obama talked about making college a possibility or included the option of attending community colleges or vocational training instead.

                                <br><br>e.g. 2

                                <br><br>-Claim:
                                    <br>When asked by a reporter whether hes at the center of a criminal scheme to violate campaign laws, Gov. Scott Walker nodded yes.

                                <br><br>-Justification:
                                    <br>A Democratic Party web video making the rounds on social media shows a grim-faced Gov. Scott Walker appearing to bob his head yes to a reporters question about whether he was at the center of a "criminal scheme" to evade campaign finance laws. In real life, the governor answered an emphatic "no" -- not surprising given hes been denying any wrongdoing since new documents were released in the John Doe investigation.


                                <div class="h6" style="margin-top: 30px; margin-bottom: 15px;">
                                ---------- Unfounded ----------
                                </div>
                                If there is no fact supporting the claim then the corresponding class is Unfounded.

                                <br><br>e.g. 1

                                <br><br>-Claim:
                                    <br>President Barack Obama has said that everybody should hate the police.

                                <br><br>-Justification:
                                    <br>Giuliani said Obama has said "that everybody should hate the police. "Throughout all of his comments since August, when the latest unrest over racial disparities in the criminal justice system began, Obama has continuously encouraged working with police to find solutions and make change. He has also repeatedly emphasized the importance of law enforcement in communities of color and the fact that police officers have a dangerous job.

                                <br><br>e.g. 2

                                <br><br>-Claim:
                                    <br>John McCain has done nothing to help the veterans.

                                <br><br>-Justification:
                                    <br>Trump said that McCain "has done nothing to help the vets. "While many veterans groups have had their differences with McCain over the years over specific legislation and his general approach to veterans issues, thats not the same as saying hes done "nothing" for veterans. In fact, just within the past two years, McCain has sponsored and helped enact several major provisions to help veterans. He also devotes a significant portion of his office staff to offer veterans on casework.

                                <div class="h4" style="margin-top: 30px; margin-bottom: 20px;">
                                    Usage Information
                                </div>
                                <ol>
                                    <li>Whenever you are ready to start, just click on the <b>Start Annotation</b> button, at the end of this page.</li><br>
                                    <li>You will be able to return to the Introduction and Examples page without losing the progress you have made, using the <b>Intro</b> button (up left).</li><br>
                                    <li>During the annotation process you will be prompted to choose between one of four selections (3 Classes + Unclear option). After selecting then click on <b>Confirm</b> button in order for your selection to be saved.</li><br>
                                    <li>The <b>Back</b>(Left Arrow) and <b>Next</b>(Right Arrow) buttons will allow you to move back and forth between claims.</li><br>
                                    <li>When you have completed the form just click on <b>Submit Results</b>, copy the text that will appear on your screen and mail it to <b>results.claim.justification@gmail.com</b>.</li><br>
                                    <li>The <b>Submit Results</b> button will be available to click after you have completed just <b>one</b> annotation. If for any reason you want to stop and you think that you wont be able to continue the process then please submit the results that you have made so far. </li><br>
                                    <li>You have been assigned <b>{{ this.elements.length }}</b> claims to annotate. We estimate that each claim will need a maximum of 2 minutes to be annotated. In case you dont want to annotate all of them, we would appreciate it if you could just annotate <b>{{ Math.round((this.elements.length * 0.6) / 5) * 5 }}</b>. </li><br>
                                    <li>The annotation tool makes use of <b>cookies</b> and saves your progress for <b>7 days</b> so that you can complete the process in that period. All the choices you have made will be kept if you close the window and restart, but it <b>wont</b> be kept if you clear browser cookies!</li><br>
                                    <li>Lastly if at any moment you want to restart the process all over again, click the <b>RESET</b> button (up right) and everything will be cleaned.</li><br>
                                </ol>
                            </div>
                        </div>

                        <div class="row col-12 d-flex justify-content-center">
                            <div class="col-4">
                                <button id="startAnnotationBtn" type="button" class="btn btn-success btn-lg" style="margin-bottom: 30px; margin-top: 30px; width: 100%; border: 1px solid black;" v-on:click="switchViewMode">
                                    Start Annotation
                                </button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

            <!-- Results Mode. -->
            <div class="h-100 w-100 d-flex justify-content-center align-items-center" key="2" v-else-if="resultsMode === true">
                
                <div style="position: absolute; left:25%; top:10%; z-index: 1000">
                    <button type="button" class="btn btn-success" @click="copyButton">
                        COPY
                    </button>
                </div>
                <div style="position: absolute; right:25%; top:10%; z-index: 1000">
                    <button type="button" class="btn btn-danger" v-on:click="switchViewMode">
                        BACK
                    </button>
                </div>
                
                <div class="h-75 w-75">
                    
                    <div class="row col-12 d-flex justify-content-center align-items-center">
               
                        <label style="text-align: center; margin-top: 20px;" for="evaluationTextArea">Please copy/paste the following text and email it to us at <i><b>results.claim.justification@gmail.com</b></i> </label>
                        <textarea style="margin-top: 30px;" rows="8" readonly id="evaluationTextArea" class="h-50 w-50" ref="copyThis" v-model="resultsMessage"></textarea>
                        <vue-basic-alert :duration="300" :closeIn="2500" ref="alert" />

                    </div>

                </div>
            </div>

            <!-- Annotation Mode. -->
            <div class="h-100 w-100" key="3" v-else-if="resultsMode === false">
                <GDialog v-model="dialogState" max-width="500">
                    <div class="wrapper">
                        <div class="content">
                            <div class="title">Reset Form?</div>

                                <p>
                                    If you reset the form, all your progress will be lost and you will have to start from the begining! 
                                </p>
                        </div>

                        <div class="actions">
                            <button class="btn btn--outline-gray" @click="dialogState = false">
                                Cancel
                            </button>
                            <button class="btn btn--outline-gray" @click="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </GDialog>
                <div style="position: absolute; right:5%; top:5%; z-index: 1000">
                    <button class="btn btn-danger" @click="dialogState = true">
                        RESET
                    </button>
                </div>
                <div style="position: absolute; left:5%; top:5%; z-index: 1000">
                    <button class="btn btn-success" @click="goToIntroduction">
                        Intro
                    </button>
                </div>
                <div class="col-12 h-100 container">
                    
                    <!-- Top Page Numbering -->
                    <div class="row col-12 d-flex justify-content-center p-2" v-if="this.element">
                        <div class="border text-center align-self-center">{{ this.element.id + 1 }} / {{
                            this.elements.length
                            }}
                        </div>
                    </div>
                    
                    <div class="row col-12 d-flex justify-content-center p-2" style="height: 40%" v-if="this.element">
                        
                        <!-- Claim -->
                        <div class="col-5 border d-flex align-items-center flex-column h-100">
                            <div class="h4 p-4">Claim</div>
                            <div style="overflow: auto">
                                {{ this.claim }}
                            </div>
                        </div>
                    </div>
                    <div class="row col-12 d-flex justify-content-center p-2" style="height: 40%" v-if="this.element">
                        <!-- Justification -->
                        <div class="col-6 border d-flex align-items-center flex-column h-100">
                            <div class="h4 p-4">Justification</div>
                            <div style="overflow: auto">
                                {{ this.justification }}
                            </div>
                        </div>

                    </div>

                    <!-- Selections -->
                    <div class="row col-12 d-flex justify-content-between p-2" v-if="this.element">                       
                        <div class="col-6 container" style="margin-top: 20px;">
                            <div class="row container col-12 pt-2 justify-content-center">
                                <div class="row col-12 justify-content-center">
                                    <div class="col-4"></div>
                                    <div class="col-6" style="margin-bottom: 10px;">Please select only <b>1</b> class.</div>
                                    <div class="col-2"></div>
                                </div>
                                <div class="row col-12 justify-content-center">
                                    <div class="col-4"></div>
                                    <div class="col-6 container justify-content-center">
                                        <div class="form-check" style="margin-bottom: 10px;">
                                            <input class="form-check-input" type="radio" name="class" id="distortion_radio" v-on:click="selectedDist"
                                                   value="distortion" v-model="distortion">
                                            <label class="form-check-label" for="distortion_radio"> Distortion</label>
                                        </div>
                                        <div class="form-check" style="margin-bottom: 10px;">
                                            <input class="form-check-input" type="radio" name="class" id="emphasis_radio" v-on:click="selectedEmp"
                                                   value="emphasis" v-model="emphasis">
                                            <label class="form-check-label" for="emphasis_radio"> Emphasis </label>
                                        </div>
                                        <div class="form-check" style="margin-bottom: 10px;">
                                            <input class="form-check-input" type="radio" name="class" id="unfounded_radio" v-on:click="selectedUnf"
                                                   value="unfounded" v-model="unfounded">
                                            <label class="form-check-label" for="unfounded_radio"> Unfounded </label>
                                        </div>
                                        <div class="form-check" style="margin-bottom: 10px;">
                                            <input class="form-check-input" type="radio" name="class" id="unclear_radio" v-on:click="selectedUnc"
                                                   value="unclear" v-model="unclear">
                                            <label class="form-check-label" for="unclear_radio"> Unclear </label>
                                        </div>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                            
                                
                                <!-- Back Button -->
                                <div class="col-2 justify-content-center" style="margin-top: 20px; margin-bottom: 20px; margin-right: 50px;">
                                    <div>
                                        <button type="button" class="btn btn-link" v-on:click="previousButton"
                                            v-bind:disabled="preventBack">
                                            <font-awesome-icon icon="arrow-left" class="fa-2x" />
                                        </button>
                                    </div> 
                                </div>

                                
                                <!-- Confirm Button -->
                                <div class="col-3 justify-content-center" style="margin-top: 20px; margin-bottom: 20px;">
                                    <div>
                                        <button type="button" class="btn btn-primary" v-on:click="confirmButton"
                                            v-bind:disabled="preventConfirm">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                                
                                
                                <!-- Next Button -->
                                <div class="col-2 justify-content-center" style="margin-top: 20px; margin-bottom: 20px; margin-left: 50px;">
                                    <div>
                                        <button type="button" class="btn btn-link" v-on:click="nextButton"
                                            v-bind:disabled="preventNext">
                                            <font-awesome-icon icon="arrow-right" class="fa-2x"/>
                                        </button>
                                    </div>
                                </div>
                            
                            </div>                        
                        </div>
                    </div>

                    <!-- Evaluation Button -->
                    <div class="row col-12 d-flex justify-content-center" v-if="this.element">
                        <div class="container col-3">
                            <div class="row justify-content-center" style="margin-top: 30px;">
                                <div class="col-8">Evaluations Done:</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-5">{{ Object.keys(this.results).length }} / {{ this.elements.length }}</div>
                            </div>
                            <div class="row col-10 justify-content-center">
                                <button id="submitEvaluationBtn" type="button" class="btn btn-success" style="margin-top: 20px;"
                                        v-on:click="switchViewMode"
                                    v-bind:disabled="Object.keys(this.results).length === 0">
                                    Submit Results
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import $ from 'jquery';
    import _ from 'lodash';

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                resultsMessage: "",
                resultsMode: false,
                introMode: true,
                evaluationId: null,
                results: {},
                elements: [],
                element: null,
                claim: null,
                justification: null,
                distortion: false,
                emphasis: false,
                unfounded: false,
                unclear: false,
                dialogState: false,
                waitingSelection: true
            }
        },
        computed: {
            preventConfirm: function () {
                if (this.isValidEvaluation())
                    return false;
                else
                    return true;
            },

            preventBack: function () {
                if (Object.keys(this.results).length === 0)
                    return true;
                
                let previousIndex = this.getPreviousIndex();
                if (previousIndex >= 0){
                    if (!(this.elements[previousIndex].id in this.results)) {
                        return true;
                    }
                }
                return false;
            },

            preventNext: function () {
                if (this.element.id in this.results)
                    return false;
                else
                    return true;
            }
        },
        methods: {
            goToIntroduction() {
                this.introMode=true;
                this.$cookies.set('intro', JSON.stringify({"intro": this.introMode}), '7d');    
            },

            switchViewMode() {
                if (this.introMode){
                    this.introMode=false;
                    this.$cookies.set('intro', JSON.stringify({"intro": this.introMode}), '7d');
                }else if (this.resultsMode)
                    this.resultsMode = false;
                else {
                    this.updateResultsGivenId(this.element.id);
                    let text = "EvaluationId#" + this.evaluationId + "\n"
                        + "\"id\", \"distortion\", \"emphasis\", \"unfounded\", \"unclear\"";
                    for (let i = 0; i < this.elements.length; i++) {
                        let result = this.results[i];
                        if (result != null) {
                                text = text + "\n" + "\"" + result.id       + "\", \"" 
                                    + (result.distortion ? true : false)    + "\", \""
                                    + (result.emphasis ? true : false)      + "\", \""  
                                    + (result.unfounded ? true : false)     + "\", \"" 
                                    + (result.unclear ? true : false)       + "\"";
                        }
                    }
                    this.resultsMessage = text;
                    this.resultsMode = true;
                }
            },
            copyButton() {       
                this.$copyText(this.resultsMessage)
                this.$refs.alert.showAlert('success', "Message copied to clipboard!", 'Success')
            },
            nextButton() {
                this.updateResultsGivenId(this.element.id);
                this.fetchNextInstance();
                this.updateEvaluationGUIGivenId(this.element.id);
                this.$cookies.set('index', JSON.stringify({"index": this.element.id}), '7d');
            },
            previousButton() {
                this.updateResultsGivenId(this.element.id);
                this.fetchPreviousInstance();
                this.updateEvaluationGUIGivenId(this.element.id);
                this.$cookies.set('index', JSON.stringify({"index": this.element.id}), '7d');
            },
            selectedDist() {
                this.emphasis = false
                this.unfounded = false
                this.unclear = false
            },
            selectedEmp() {
                this.distortion = false
                this.unfounded = false
                this.unclear = false
            },
            selectedUnf() {
                this.distortion = false
                this.emphasis = false
                this.unclear = false
            },
            selectedUnc() {
                this.distortion = false
                this.emphasis = false
                this.unfounded = false
            },
            confirmButton() {
                this.updateResultsGivenId(this.element.id);
            },
            updateResultsGivenId(id) {
                if (this.isValidEvaluation()) {
                    this.results[id] = {
                        "id": this.element.id,
                        "distortion": this.distortion,
                        "emphasis": this.emphasis,
                        "unfounded": this.unfounded,
                        "unclear": this.unclear
                    };
                }
                this.$cookies.set('results', JSON.stringify({"results": this.results}), '7d');
            },
            updateEvaluationGUIGivenId(id) {
                if (id in this.results) {
                    let data = this.results[id];
                    console.log(data);
                    this.distortion = data["distortion"];
                    this.emphasis = data["emphasis"];
                    this.unfounded = data["unfounded"];
                    this.unclear = data["unclear"];
                } else {
                    this.distortion = false;
                    this.emphasis = false;
                    this.unfounded = false;
                    this.unclear = false;
                }
            },
            isValidEvaluation() {
                if (this.distortion === false 
                            && this.emphasis === false 
                                && this.unfounded === false
                                    && this.unclear === false)
                    return false;
                else
                    return true;
            },
            assignSummaries() {
                this.claim = this.element.claim;
                this.justification = this.element.justification;
            },
            getPreviousIndex() {
                let index = -1;
                if (this.elements.length > 0) {
                    let current = this.element;
                    index = 0;
                    if (current !== null) {
                        let current_index = _.findIndex(this.elements, function (o) {
                            return o.id === current.id
                        });
                        if (current_index > 0)
                            index = current_index - 1;
                        else
                            index = this.elements.length - 1;
                    }
                }
                return index;
            },
            fetchPreviousInstance() {
                    let index = this.getPreviousIndex();
                    
                    if (index >= 0){
                        this.element = this.elements[index];
                        this.assignSummaries();
                    }
            },
            getNextIndex() {
                let index = -1;
                if (this.elements.length > 0) {
                    let current = this.element;
                    index = 0;
                    if (current !== null) {
                        let current_index = _.findIndex(this.elements, function (o) {
                            return o.id === current.id
                        });
                        if (current_index < this.elements.length - 1)
                            index = current_index + 1;
                        else
                            index = 0;
                    }
                }
                return index;
            },
            fetchNextInstance() {
                    let index = this.getNextIndex();
                    
                    if (index >= 0){
                        this.element = this.elements[index];
                        this.assignSummaries();
                    }
            },
            reload() {
                console.log("reload");
                let instance = this;
                let evaluation = this.$cookies.get('evaluation');
                if (evaluation == null){
                   let evalNum = Math.ceil(Math.random() * (4));
                    console.log("Eval num mount is: " + evalNum)
                    evaluation = "evaluation" + evalNum + ".json";
                    instance.$cookies.set('evaluation', JSON.stringify({"evaluation": evaluation}), '7d');
                }else{
                    evaluation = evaluation.evaluation;
                }
                console.log("Evaluation from reload is: " + evaluation);
                $.getJSON(evaluation, function (object) {
                    instance.elements = object;
                    instance.fetchNextInstance();
                    instance.evaluationId = '_' + Math.random().toString(36).substr(2, 9) + "#" + evaluation;
                    instance.$cookies.set('evaluationId', JSON.stringify({"evaluationId": instance.evaluationId}), '7d');
                });
            },
            reset() {

                let instance = this;
                    
                instance.$cookies.remove("evaluationId");
                instance.$cookies.remove("index");
                instance.$cookies.remove("results");
                instance.$cookies.remove("intro");
                instance.results = {};
                instance.elements = [];
                instance.element = null;
                instance.claim = null;
                instance.justification = null;
                instance.distortion = false;
                instance.emphasis = false;
                instance.unfounded = false;
                instance.unclear = false;
                instance.dialogState = false;
                instance.reload();
            }
        },
        mounted() {
            let evaluationId = this.$cookies.get('evaluationId');
            if (evaluationId == null) {
                console.log("No save cookie found!");
                this.reload();
            } else {
                this.evaluationId = evaluationId.evaluationId;
                console.log("Saved cookie found (" + this.evaluationId + ") loading...");
                let indexCookie = this.$cookies.get('index');
                let index = 0;
                if (indexCookie != null)
                    index = indexCookie.index;
                console.log(index);
                let results = this.$cookies.get('results');
                console.log(this.$cookies.get('results'));
                if (results != null)
                    this.results = results.results;
                    if (index in this.results){
                        this.distortion = this.results[index].distortion
                        this.emphasis = this.results[index].emphasis
                        this.unfounded = this.results[index].unfounded
                        this.unclear = this.results[index].unclear
                    }

                let intro = this.$cookies.get('intro');
                console.log(this.$cookies.get('intro'));
                if (intro != null){
                    this.introMode = intro.intro;
                }

                let instance = this;
                let evaluation = this.$cookies.get('evaluation');
                if (evaluation == null){
                    let evalNum = Math.ceil(Math.random() * (4));
                    console.log("Eval num mount is: " + evalNum)
                    evaluation = "evaluation" + evalNum + ".json";
                    instance.$cookies.set('evaluation', JSON.stringify({"evaluation": evaluation}), '7d');
                }else{
                    evaluation = evaluation.evaluation;
                }
                console.log("Evaluation from mount is: " + evaluation);
                $.getJSON(evaluation, function (object) {
                    instance.elements = object;
                    instance.element = instance.elements[index];
                    instance.assignSummaries();
                    });
            }
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    @import '~vuejs-dialog/dist/vuejs-dialog.min.css';

    html,
    body {
        height: 100%;
        margin: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .wrapper {
        color: #000;
    }

    .content {
    padding: 20px;
    }

    .title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

</style>
