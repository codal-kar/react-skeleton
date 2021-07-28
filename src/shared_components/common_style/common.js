import React from 'react';
import { Select } from 'antd';
import { MyGeneralCard } from "./common_style";

function Common(props) {

    return (
        <div className="block-row">
            <div className="container">
                <MyGeneralCard className="mb-30">
                    <h1>H1 size 32 with <small>Small title with header</small></h1>
                    <h2>H2 size 20 with <small>Small title with header</small></h2>
                    <h3>H3 size 18 with <small>Small title with header</small></h3>
                    <h4>H4 size 16 with <small>Small title with header</small></h4>
                    <h5>H5 size 15 with <small>Small title with header</small></h5>
                    <h6>H6 size 14 with <small>Small title with header</small></h6>
                </MyGeneralCard>
                <MyGeneralCard className="flex mb-30 flex-wrap">
                    <button className="btn btn-primary">Basic</button>
                    <button className="btn btn-bdr">Primary</button>
                    <button className="btn btn-filter">Success</button>
                    <button className="btn sm-btn">sm-btn</button>
                    <button className="btn lg-btn">lg-btn</button>
                    <button className="btn btn-danger">Danger</button>
                    <button className="btn btn-grey">grey</button>
                    <button className="btn btn-disabled">Disabled</button>
                    <hr />
                    <button className="btn big-btn">big-btn</button>
                </MyGeneralCard>
                <MyGeneralCard className="mb-30">
                    <div className="title-row">
                        <h1>listing</h1>
                        <p>All type of content style here...</p>
                    </div>
                    <div className="inner-block-row">
                        <ul className="check-list">
                            <li><i className="las la-check-circle success"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li><i className="las la-times-circle red"></i>Morbi ac justo dictum, vestibulum orci sit amet, euismod neque.</li>
                            <li><i className="las la-times-circle red"></i>In consectetur est eget pellentesque lobortis.</li>
                            <li><i className="las la-check-circle success"></i>Suspendisse suscipit mauris eu libero varius sollicitudin.</li>
                        </ul>
                        <p> Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit. Qui aut, dolore eaque sint
                            tenetur fugit ut quas maiores. Veritatis omnis numquam quasi cumque recusandae fugiat expedita, maxime
                            aspernatur vero id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aut, dolore eaque sint
                            tenetur fugit ut quas maiores. Veritatis omnis numquam quasi cumque recusandae fugiat expedita, maxime
                            aspernatur vero id.</p>
                        <blockquote className="horiz">
                            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia deserunt iure debitis modi rem tenetur
                                molestias iusto error</p>
                        </blockquote>
                    </div>
                </MyGeneralCard>
                <MyGeneralCard className="mb-30">
                    <div className="inner-block-row">
                        <div className="form-group">
                            <div className="fitem">
                                <label htmlFor="">Input Empty</label>
                                <input type="text" placeholder="Input Empty" />
                            </div>
                            <div className="fitem">
                                <label htmlFor="">Input Disabled</label>
                                <input type="text" disabled="true" value="test" />
                                <label className="validate-message">Success Message will be diplayed here...</label>
                            </div>
                            <div className="fitem">
                                <label htmlFor="">Input test</label>
                                <input type="text" value="test" />
                                <label className="validate-message">Success Message..</label>
                            </div>
                            <div className="fitem">
                                <label htmlFor="">Input Error</label>
                                <input type="text" />
                                <label htmlFor="" className="error">Error Message will be diplayed here...</label>
                            </div>
                            <div className="fitem half-fitem">
                                <div className="half-fitem">
                                    <label htmlFor="">Password</label>
                                    <div className="inline-fitem">
                                        <input type="text" placeholder="8+ characters" />
                                        <span className="show-pwd"><img src="assets/images/show-pwd-icon.svg" alt="" />Show</span>
                                    </div>
                                </div>

                                <div className="fitem  half-fitem">
                                    <label>Antd Select</label>
                                    <div>
                                        <Select
                                            getPopupContainer={(triggerNode) => (triggerNode)}
                                            defaultValue="1"
                                            showArrow

                                            showSearch
                                            virtual={false}
                                            style={{ width: '100%' }}

                                        >


                                        </Select>
                                    </div>
                                </div>
                                <div className="fitem  half-fitem">
                                    <label>Selected Empty</label>
                                    <select>
                                        <option>Select Empty</option>
                                        <option>Lorem ipsum dolor,</option>
                                        <option>Lorem ipsum </option>
                                        <option>Lorem doloroption </option>
                                    </select>


                                </div>
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>

                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="fitem half-fitem">
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="fitem half-fitem">
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                                <div className="fitem half-fitem">
                                    <label htmlFor="">Input label</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="fitem half-fitem">
                                <div className="fitem half-fitem inline-check-list">
                                    <div className="fitem-check">
                                        <input type="radio" className="fitem-ck-input" id="radio1" name="test" />
                                        <label htmlFor="radio1" className="fitem-ck-txt">This is radio btn</label>
                                    </div>
                                    <div className="fitem-check">
                                        <input type="radio" className="fitem-ck-input" id="radio2" name="test" />
                                        <label htmlFor="radio2" className="fitem-ck-txt">This is radio btn</label>
                                    </div>
                                </div>
                                <div className="fitem half-fitem inline-check-list">
                                    <div className="fitem-check">
                                        <input type="checkbox" className="fitem-ck-input" id="checkbox" name="checkboxs" />
                                        <label htmlFor="checkbox" className="fitem-ck-txt">This is checkbox btn</label>
                                    </div>
                                    <div className="fitem-check">
                                        <input type="checkbox" className="fitem-ck-input" id="checkbox1" name="checkboxsa" />
                                        <label htmlFor="checkbox1" className="fitem-ck-txt">This is checkbox btn</label>
                                    </div>
                                </div>
                            </div>
                            <div className="fitem">
                                <label>Selected Empty</label>
                                {/* <select>
                            <option>Select Empty</option>
                            <option>Lorem ipsum dolor,</option>
                            <option>Lorem ipsum </option>
                            <option>Lorem doloroption </option>
                            </select> */}

                            </div>
                        </div>
                    </div>
                </MyGeneralCard>
            </div>
        </div>
    );
}

export default Common;

